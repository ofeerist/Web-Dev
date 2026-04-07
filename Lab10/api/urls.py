from django.urls import path
from . import views

urlpatterns = [
    # fbv
    # path('products/', views.products_list, name='product-list'),
    # path('products/<int:product_id>/', views.product_detail, name='product-detail'),

    # cbv mixins
    # path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    # path('products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),

    # generics
    path('categories/', views.CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view(), name='category-products'),
    path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
]