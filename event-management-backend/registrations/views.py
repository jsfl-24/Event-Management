from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Registration
from .serializers import RegistrationSerializer, CreateRegistrationSerializer
from events.models import Event

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def register_for_event(request, event_id):
    try:
        event = Event.objects.get(id=event_id)
    except Event.DoesNotExist:
        return Response({'error': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)

    # Check if user already registered
    if Registration.objects.filter(user=request.user, event=event).exists():
        return Response({'error': 'Already registered for this event'}, 
                       status=status.HTTP_400_BAD_REQUEST)

    # Check if event is full
    if event.spots_left <= 0:
        return Response({'error': 'Event is full'}, status=status.HTTP_400_BAD_REQUEST)

    # Create registration
    registration_data = {
        'event': event.id,
        'payment_status': 'completed' if event.fee_amount == 0 else 'pending',
        'payment_id': '',
        'amount_paid': event.fee_amount
    }

    serializer = CreateRegistrationSerializer(data=registration_data, context={'request': request})
    if serializer.is_valid():
        registration = serializer.save()
        return Response({
            'message': 'Registration successful',
            'registration': RegistrationSerializer(registration).data
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_registrations(request):
    registrations = Registration.objects.filter(user=request.user)
    serializer = RegistrationSerializer(registrations, many=True)
    return Response(serializer.data)
