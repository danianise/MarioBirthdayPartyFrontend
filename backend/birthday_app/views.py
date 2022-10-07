from .serializers import DeclineSerializer, ResponseSerializer
from rest_framework import generics
from .models import Response, Decline

# Create your views here.
# def response_list(request):
#     responses = Response.objects.all()
#     return render(request, 'birthday_app/response_list.html', {'responses':responses})

class ResponseList(generics.ListCreateAPIView):
    serializer_class=ResponseSerializer
    queryset=Response.objects.all()

class ResponseDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ResponseSerializer
    queryset = Response.objects.all()


class DeclineList(generics.ListCreateAPIView):
    serializer_class=DeclineSerializer
    queryset=Decline.objects.all()

class DeclineDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DeclineSerializer
    queryset = Decline.objects.all()
