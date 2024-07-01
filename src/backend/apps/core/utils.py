from apps.core.models import Persona
from apps.core.serializers import PersonaSerializer
from django.http import Http404


def get_name(i=None):
    if i is not None:
        try:
            i = int(i)
            p = Persona.objects.get(id=i)
            return PersonaSerializer(p).data
        except Exception as e:
            print(e)
            raise Http404
    else:
        raise Http404

def traer_personas(request):
    p = Persona.objects.all()
    return PersonaSerializer(p, context={"request": request}, many=True).data

def guardar_persona(*args, **kwargs):
    if 'nombre' in kwargs and kwargs.get('nombre') != "" and type(kwargs.get('nombre')) == str:
        p = Persona.objects.create(name = kwargs.get('nombre'))
        p.f_nacimiento = kwargs.get('f_nacimiento') if 'f_nacimiento' in kwargs else None
        p.ciudad = kwargs.get('ciudad') if 'ciudad' in kwargs else None
        p.avatar = kwargs.get('avatar') if 'avatar' in kwargs else None
        p.save()
        return True
    else:
        return False
    
def borrar_persona(i=None):
    if i is not None:
        try:
            i = int(i)
            Persona.objects.get(id=i).delete()
            return True
        except Exception as e:
            print(e)
            raise Http404
    else:
        raise Http404