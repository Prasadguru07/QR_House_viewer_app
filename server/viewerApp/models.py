from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Create your models here.

class User(AbstractUser) : 
    phone = models.CharField(max_length=10)
    location = models.CharField(max_length=64)
    
    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',  # Avoid clash with default user_set
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_set',  # Avoid clash
        blank=True
    )

    def __str__(self):
        return self.username


class RentalHouseDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.CharField(max_length=255)
    rentalType = models.TextField(max_length=64)
    facilities = models.ManyToManyField("Facilities", related_name="houseFacilities")
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField()

    def __str__(self):
        return self.about



class Facilities(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class RentalHouseImage(models.Model):
    house = models.ForeignKey(RentalHouseDetails, on_delete=models.CASCADE, related_name="houseImages")
    image = models.ImageField(upload_to="rentalHome_images/")

    def __str__(self):
        return f"Image for {self.house.rentalType} rental home"