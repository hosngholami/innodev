from rest_framework.generics import GenericAPIView, ListAPIView
from setting.api.v1.serializers.MenuSerializer import MenuSerializer
from setting.api.v1.serializers.CategorySerializer import CategorySerializer
from setting.api.v1.serializers.ParentMenuSerializer import ParentMenuSerializer
from rest_framework.response import Response
from rest_framework import status
from setting.models import *
from core.paginations import DefaultPagination
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import rest_framework as filters
from rest_framework.filters import SearchFilter, OrderingFilter


class CategoryMenuAPIView(GenericAPIView):
    serializer_class = CategorySerializer
    pagination_class =  DefaultPagination
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = {'id': ["exact"], 'status':["exact", "in"], "priority" : ["exact"]}
    search_fields = ['title']
    ordering_fields = ['title', 'status', 'priority']
    
    
    def get_queryset(self):
        return CategoryMenu.objects.prefetch_related(
        'menu', 'menu__children'        
        ).order_by('priority').all()

    def get(self, request, *args, **kwargs):
        
        queryset = self.get_queryset()
        queryset = self.filter_queryset(queryset)
        

        if 'id' in request.query_params and queryset.count() == 1:
            instance = queryset.first()
            serializer = self.serializer_class(instance) 
            return Response(serializer.data)

        queryset = self.paginate_queryset(queryset)
        serializer = self.serializer_class(queryset, many=True)
        return self.get_paginated_response(serializer.data)
    
    def post(self, request, *args, **kwargs):
         serializer = self.serializer_class(data=request.data)
         serializer.is_valid(raise_exception=True)
         
         if(serializer.is_valid()):
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
         return Response('not valid', status=status.HTTP_400_BAD_REQUEST)
     
     
    def put(self, request, *args, **kwargs):
          categoryId = request.data.get("id")
          print(f'categoryId: {categoryId}')
          category = CategoryMenu.objects.filter(id=categoryId).first()
          serializer = self.serializer_class(category, data=request.data)
          serializer.is_valid(raise_exception=True)
          serializer.save()
          
          return Response(serializer.data, status=status.HTTP_200_OK)

    
    def delete(self, request, *args, **kwargs):
        categoryId = request.data.get("id")
        category = CategoryMenu.objects.filter(id=categoryId)
        category.delete()
        
        return Response(category, status=status.HTTP_200_OK)

class MenuAPIView(GenericAPIView):
    
    serializer_class = MenuSerializer
    pagination_class =  DefaultPagination
    
    def get_queryset(self):
         return  Menu.objects.filter(parent__isnull=True).all()
         
    def get(self, request, *args, **kwargs):
        
        queryset = self.get_queryset()
        queryset = self.filter_queryset(queryset)
        

        if ('id' in request.query_params and queryset.count() == 1):
            instance = queryset.first()
            serializer = self.serializer_class(instance) 
            return Response(serializer.data)

        queryset = self.paginate_queryset(queryset)
        serializer = self.serializer_class(queryset, many=True)
        return self.get_paginated_response(serializer.data)
    
    
    def post(self, request, *args, **kwargs):
         serializer = self.serializer_class(data=request.data)
         serializer.is_valid(raise_exception=True)
         
         if(serializer.is_valid()):
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
         return Response('not valid', status=status.HTTP_400_BAD_REQUEST)
    
    
    
class ParentMenuAPIView(GenericAPIView):
    serializer_class = ParentMenuSerializer
    
    def get_queryset(self):
        return Menu.objects.filter(parent__isnull=True)
    
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        queryset = self.filter_queryset(queryset)


        if 'id' in request.query_params and queryset.count() == 1:
            instance = queryset.first()
            serializer = self.serializer_class(instance) 
            return Response(serializer.data)

        queryset = self.paginate_queryset(queryset)
        serializer = self.serializer_class(queryset, many=True)
        return self.get_paginated_response(serializer.data)



    
    
             
            
            
    
    





        
         