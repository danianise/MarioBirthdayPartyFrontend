from rest_framework import serializers
from .models import Decline, Response

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = ('name', 'guest_count', 'message')

class DeclineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Decline
        fields = ('name', 'message')