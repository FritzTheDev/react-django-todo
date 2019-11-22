from rest_framework.viewsets import ModelViewSet
from todos.models import Todo
from todos.serializers import TodoSerializer

class TodoViewSet(ModelViewSet):
    queryset = Todo
    serializer_class = TodoSerializer