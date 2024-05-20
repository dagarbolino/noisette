from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Cheese
from .serializers import CheeseSerializer




class CheeseListCreate(generics.ListCreateAPIView):
    queryset = Cheese.objects.all()
    serializer_class = CheeseSerializer
    
    def delete(self, request, *args, **kwargs):
        Cheese.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CheeseRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cheese.objects.all()
    serializer_class = CheeseSerializer
    lookup_field = 'pk'


class CheeseListCategory(generics.ListCreateAPIView):
    queryset = Cheese.objects.all()
    serializer_class = CheeseSerializer
    
    def get_queryset(self):
        return Cheese.objects.filter(category=self.kwargs['category'])    
