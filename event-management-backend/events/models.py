from django.db import models

# Create your models here.

class Event(models.Model):
    EVENT_TYPES = [
        ('technical', 'Technical'),
        ('non-technical', 'Non-Technical'),
    ]
    
    DAY_CHOICES = [
        (1, 'Day 1'),
        (2, 'Day 2'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.CharField(max_length=20)
    time = models.CharField(max_length=50)
    fee = models.CharField(max_length=20)
    fee_amount = models.DecimalField(max_digits=10, decimal_places=2)
    event_type = models.CharField(max_length=20, choices=EVENT_TYPES)
    day = models.IntegerField(choices=DAY_CHOICES)
    is_key_event = models.BooleanField(default=False)
    max_participants = models.IntegerField(default=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.title} - Day {self.day}"
    
    @property
    def registered_count(self):
        return self.registrations.count()
    
    @property
    def spots_left(self):
        return self.max_participants - self.registered_count
