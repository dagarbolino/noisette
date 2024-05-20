from rest_framework import serializers
from . models import Cheese


class CheeseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cheese
        fields = ['id', 'name', 'slug', 'description', 'origin', 'department', 'milk_type', 'category', 'composition', 'imageUrl', 'price', 'quantity']
        


