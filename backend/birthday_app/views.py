from rest_framework import generics
from .serializers import DeclineSerializer, ResponseSerializer
from .models import Response, Decline

# Create your views here.
# def response_list(request):
#     responses = Response.objects.all()
#     return render(request, 'birthday_app/response_list.html', {'responses':responses})

class ResponseList(generics.ListCreateAPIView):
    serializer_class=ResponseSerializer
    queryset=Response.objects.all()

class DeclineList(generics.ListCreateAPIView):
    serializer_class=DeclineSerializer
    queryset=Decline.objects.all()