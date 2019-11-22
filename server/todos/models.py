from django.db.models import Model, CharField, BooleanField

# Create your models here.

class Todo(Model):
    title = CharField(max_length=30)
    body = CharField(max_length=300)
    completed = BooleanField(default=False)