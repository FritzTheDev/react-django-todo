from django.urls import path
from .views.todo_view_set import TodoViewSet

todo_list = TodoViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

todo_detail = TodoViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path('', todo_list, name="todo-list"),
    path('<int:pk>/', todo_detail, name="todo-detail"),
]
