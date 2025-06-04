from django.contrib import admin
from .models import Event

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'day', 'event_type', 'fee', 'registered_count', 'spots_left', 'is_key_event']
    list_filter = ['day', 'event_type', 'is_key_event']
    search_fields = ['title', 'description']
    ordering = ['day', 'title']
    
    def registered_count(self, obj):
        return obj.registered_count
    registered_count.short_description = 'Registered'
    
    def spots_left(self, obj):
        return obj.spots_left
    spots_left.short_description = 'Spots Left'
