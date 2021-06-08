from django.contrib.auth.models import User, Group
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'password')
        extra_kwargs = {'passsword' : {'write_only': True, 'required': True}}
    
    def create (self, validate_data) :
        user = User.objects.create_user(**validate_data)
        return user