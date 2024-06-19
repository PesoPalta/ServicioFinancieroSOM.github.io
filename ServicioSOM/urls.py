from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

#URLConf
urlpatterns = [
    path('',views.vistaSOM, name='index'),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)