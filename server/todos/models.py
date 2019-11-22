from django.db.models import Model, CharField, DateTimeField

# Create your models here.

class Todo(Model):
    created_on = DateTimeField(auto_now_add=True)
    title = CharField(max_length=30)
    body = CharField(max_length=300)