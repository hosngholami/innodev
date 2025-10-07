import base64
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from aboutus.api.v1.serializers.ProjectSerializer import ProjectSerializer
from aboutus.api.v1.serializers.ProjectImageSerializer import ProjectImageSerializer
from aboutus.api.v1.serializers.ProjectDetailSerializer import ProjectDetailSerializer
from aboutus.models import *
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView


class ProjectAPIView(GenericAPIView):
    serializer_class = ProjectSerializer

    
    def get_queryset(self):
        id = self.kwargs.get('id')
        if id:
            return Project.objects.filter(id=id).first()
        return Project.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if self.kwargs.get('id'):
            serializer = self.serializer_class(queryset)
        else:
            serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    


class ProjectImageAPIView(APIView):
    serializer_class = ProjectImageSerializer
    parser_classes = [MultiPartParser, FormParser]

    
    def get_queryset(self):
        projectid = self.kwargs['id']
        return ProjectImage.objects.filter(project_id=projectid).all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        projectID = self.kwargs['id']
        project = Project.objects.filter(id=projectID).first()
        images = request.FILES.getlist('images')

        if not images:
            return Response({'detail': 'No images provided.'}, status=status.HTTP_400_BAD_REQUEST)

        saved_images = []
        for image in images:
            serializer = self.serializer_class(data={'image': image})
            serializer.is_valid(raise_exception=True)
            serializer.save(project=project)
            saved_images.append(serializer.data)
        return Response(saved_images, status=status.HTTP_201_CREATED)
    
    def delete(self, request, *args, **kwargs):
        imageID = self.kwargs.get('pk')
        try:
        
            images = ProjectImage.objects.filter(id=imageID).first()
        except ProjectImage.DoesNotExist:
            return Response({'detail': "تصویر یافت نشد"}, status=status.HTTP_400_BAD_REQUEST)
        
        images.delete()

        return Response({'detail': 'تصویر با موفقیت حذف شد.'}, status=status.HTTP_204_NO_CONTENT)

        

class ProjectDetailAPIView(GenericAPIView):

    serializer_class = ProjectDetailSerializer

    
    def get_queryset(self):
        projectid = self.kwargs['id']
        return ProjectDetail.objects.filter(project_id=projectid).first()

    def get(self, request, *args, **kwargs):

        projectID = self.kwargs.get('id')
        projectDetailID = self.kwargs.get('pk')
        if(projectID and not projectDetailID):
            queryset = ProjectDetail.objects.filter(project_id = projectID).all()
            serializer = self.serializer_class(queryset, many=True)
        else:
            queryset = ProjectDetail.objects.filter(project_id = projectID, id = projectDetailID).all()
            serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        projectid = self.kwargs['id']
        project = Project.objects.filter(id=projectid).first()
        serializer.is_valid(raise_exception=True)
        serializer.save(project=project)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, *args, **kwargs):
        projectDetailID = self.kwargs['pk']
        queryset = ProjectDetail.objects.filter(id=projectDetailID).first()
        serializer = self.serializer_class(queryset, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    

    def delete(self, request, *args, **kwargs):
        detailID = self.kwargs.get('pk')
        try:
            project = ProjectDetail.objects.filter(id=detailID).first()
            project.delete()

        except ProjectImage.DoesNotExist:
            return Response({'detail': "حذف با خطا مواجه شد."}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'detail': 'حذف با موفقیت انجام شد.'}, status=status.HTTP_204_NO_CONTENT)
