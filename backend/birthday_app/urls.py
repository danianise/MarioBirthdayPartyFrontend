from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns=[
    path('responses/', views.ResponseList.as_view(), name='response_list'),
    path('responses/<int:pk>/', views.ResponseDetail.as_view, name = 'response_detail'),
    path('declines/', views.DeclineList.as_view(), name='decline_list'),
    path('declines/<int:pk>/', views.DeclineDetail.as_view, name = 'decline_detail'),
]