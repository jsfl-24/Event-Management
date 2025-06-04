from django.contrib import admin
from .models import Registration

@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ['user', 'event', 'payment_status', 'amount_paid', 'registered_at']
    list_filter = ['payment_status', 'event__day', 'event__event_type']
    search_fields = ['user__first_name', 'user__last_name', 'user__phone', 'event__title']
    ordering = ['-registered_at']
    
    def get_queryset(self, request):
        return super().get_queryset(request).select_related('user', 'event')
