from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.todo_view_set import TodoViewSet

router = DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
