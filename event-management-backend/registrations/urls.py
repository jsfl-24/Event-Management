from django.urls import path
from . import views

urlpatterns = [
    path('register/<int:event_id>/', views.register_for_event, name='register-event'),
    path('my-registrations/', views.get_user_registrations, name='user-registrations'),
]