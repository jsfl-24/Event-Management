from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    registered_count = serializers.ReadOnlyField()
    spots_left = serializers.ReadOnlyField()
    
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'date', 'time', 'fee', 'fee_amount',
                 'event_type', 'day', 'is_key_event', 'max_participants', 
                 'registered_count', 'spots_left', 'created_at']
        read_only_fields = ['id', 'created_at']