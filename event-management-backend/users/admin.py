from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ['username', 'first_name', 'last_name', 'phone', 'email', 'college', 'is_active']
    list_filter = ['is_active', 'college', 'year', 'branch']
    search_fields = ['username', 'first_name', 'last_name', 'phone', 'email']
    
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {
            'fields': ('phone', 'age', 'college', 'year', 'branch')
        }),
    )
