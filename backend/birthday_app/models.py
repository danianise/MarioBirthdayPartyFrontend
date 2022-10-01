from django.db import models

# Create your models here.

class Response(models.Model):
    name = models.CharField(max_length=100)
    guest_count = models.CharField(max_length=100)
    message = models.CharField(max_length=500)

    def __str__(self):
        return self.name, self.guest_count