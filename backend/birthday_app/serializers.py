from rest_framework import serializers
from .models import Response

class ResponseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Response
        fields = ('name', 'guest_count', 'message')