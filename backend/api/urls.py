from django.urls import path
from .views import CheeseListCreate, CheeseRetrieveUpdateDestroy, CheeseListCategory

urlpatterns = [
    path('cheeses/', CheeseListCreate.as_view(), name='cheese-list-create'),
    path('cheeses/<int:pk>/',
        CheeseRetrieveUpdateDestroy.as_view(), 
        name='update'),
    
    path('cheeses/<str:category>/', 
        CheeseListCategory.as_view(), 
        name='category'),
    

]