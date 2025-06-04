from rest_framework import serializers
from .models import Registration
from events.serializers import EventSerializer
from users.serializers import UserSerializer

class RegistrationSerializer(serializers.ModelSerializer):
    event_details = EventSerializer(source='event', read_only=True)
    user_details = UserSerializer(source='user', read_only=True)
    
    class Meta:
        model = Registration
        fields = ['id', 'user', 'event', 'payment_status', 'payment_id', 
                 'amount_paid', 'registered_at', 'event_details', 'user_details']
        read_only_fields = ['id', 'registered_at']

class CreateRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['event', 'payment_status', 'payment_id', 'amount_paid']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)