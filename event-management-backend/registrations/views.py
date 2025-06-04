from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Registration
from events.models import Event

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def register_for_event(request, event_id):
    try:
        event = Event.objects.get(id=event_id)
        # Check if already registered
        if Registration.objects.filter(user=request.user, event=event).exists():
            return Response({'error': 'Already registered'}, status=400)
        
        # Create registration
        registration = Registration.objects.create(
            user=request.user,
            event=event,
            amount_paid=event.fee_amount,
            payment_status='completed' if event.fee_amount == 0 else 'pending'
        )
        
        return Response({'message': 'Registration successful'}, status=201)
    except Event.DoesNotExist:
        return Response({'error': 'Event not found'}, status=404)
