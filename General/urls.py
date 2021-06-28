from rest_framework import routers
from .api import LocationViewSet, UserViewSet, DeliverymanViewSet, DeliveryViewSet
from Car.api import Car_modelViewSet, CarViewSet, Car_rentViewSet
from Bike.api import Bike_modelViewSet, BikeViewSet, Bike_rentViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet, 'users')
router.register('locations', LocationViewSet, 'locations')
router.register('deliverymans', DeliverymanViewSet, 'deliverymans')
router.register('deliverys', DeliveryViewSet, 'deliverys')
router.register('car_models', Car_modelViewSet, 'car_models')
router.register('cars', CarViewSet, 'cars')
router.register('car_rents', Car_rentViewSet, 'car_rents')
router.register('bike_models', Bike_modelViewSet, 'bike_models')
router.register('bikes', BikeViewSet, 'bikes')
router.register('bike_rents', Bike_rentViewSet, 'bike_rents')
urlpatterns = router.urls