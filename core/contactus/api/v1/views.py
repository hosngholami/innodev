import base64
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from contactus.api.v1.serializers.ContactUsSerializer import ContactUsSerializer
from contactus.models import ContactUs


class ContactUsAPIView(GenericAPIView):

    serializer_class = ContactUsSerializer

    def get_queryset(self):
        return ContactUs.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

