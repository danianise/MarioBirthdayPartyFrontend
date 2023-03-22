from django.db import models

# Create your models here.

class Response(models.Model):
    name = models.CharField(max_length=100)
    adult_count = models.CharField(max_length=100)
    kids_count = models.CharField(max_length=100)
    message = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return '{}, {} people in party'.format(self.name, self.guest_count)

class Decline(models.Model):
    name = models.CharField(max_length=100)
    decline_message = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return '{} has declined'.format(self.name)