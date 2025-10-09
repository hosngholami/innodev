import base64
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from blog.api.v1.serializers.BlogSerializer import BlogSerializer
from blog.api.v1.serializers.BlogDeatilSerializer import BlogDetailSerializer
from blog.api.v1.serializers.CategorySerializer import CategorySerializer
from blog.models import *
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView


class CategoryAPIView(GenericAPIView):
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        if(self.kwargs.get('id')):
            id = self.kwargs.get('id')
            queryset = Category.objects.filter(id=id).first()
            serializer = self.serializer_class(queryset)
        else:
            queryset = Category.objects.all()
            serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, *args, **kwargs):
        categoryID = self.kwargs.get('id')
        queryset = Category.objects.filter(id=categoryID).first()
        serializer = self.serializer_class(queryset, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, *args, **kwargs):
        categoryID = self.kwargs.get('id')
        try:
            category = Category.objects.get(id=categoryID)
        except Category.DoesNotExist:
            return Response({"error": "دسته بندی وجود ندارد"}, status=status.HTTP_404_NOT_FOUND)
        category.delete()
        return Response({"detail": "با موفقیت حذف شده."}, status=status.HTTP_200_OK)
    


class BlogAPIView(GenericAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        pass

    def get(self, request, *args, **kwargs):
        if(self.kwargs.get('id')):
            id = self.kwargs.get('id')
            queryset = Blog.objects.filter(id=id).first()
            serializer = self.serializer_class(queryset)
        else:
            queryset = Blog.objects.all()
            serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = BlogSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def put(self, request, *args, **kwargs):
        blogID = self.kwargs.get('id')
        queryset = Blog.objects.filter(id=blogID).first()
        serializer = self.serializer_class(queryset, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        if 'category' in serializer.validated_data:
            categories = serializer.validated_data['category']
            queryset.category.set(categories)
        return Response(serializer.data)
    
    def delete(self, request, *args, **kwargs):
        blogID = self.kwargs.get('id')
        try:
            project = Blog.objects.filter(id=blogID).first()
        except Blog.DoesNotExist:
            return Response({'detail': "حذف با خطا مواجه شد."}, status=status.HTTP_400_BAD_REQUEST)
        
        project.delete()
        
        return Response({'detail': 'حذف با موفقیت انجام شد.'}, status=status.HTTP_204_NO_CONTENT)

    

class BlogDetailAPIView(GenericAPIView):
    serializer_class = BlogDetailSerializer

    def get_queryset(self):
        pass

    def get(self, request, *args, **kwargs):
        blogID = self.kwargs.get('id')
        blogDetailID = self.kwargs.get('pk')
        if(blogID and not blogDetailID):
            
            queryset = BlogDetail.objects.filter(blog_id=blogID).all()
        else:
            queryset = BlogDetail.objects.filter(id=blogDetailID, blog_id=blogID).all()

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        blogID = self.kwargs.get('id')
        blog = Blog.objects.get(id=blogID)

        serializer = BlogDetailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(blog=blog)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def put(self, request, *args, **kwargs):
        blogID = self.kwargs.get('id')
        blogDetailID = self.kwargs.get('pk')
        queryset = BlogDetail.objects.filter(id=blogDetailID, blog_id=blogID).first()
        serializer = self.serializer_class(queryset, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)