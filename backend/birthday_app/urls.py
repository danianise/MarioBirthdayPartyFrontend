from django.urls import path
from . import views

urlpatterns=[
    path('responses/', views.ResponseList.as_view(), name='response_list'),
    path('declines/', views.DeclineList.as_view(), name='decline_list'),
]