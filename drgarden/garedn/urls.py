from django.urls import include, path
from rest_framework import routers
from .views import ArticleViewSet, ProductViewSet, OrderViewSet, OrderDetailViewSet, CommentViewSet, ForumPostViewSet

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-details', OrderDetailViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'forum-posts', ForumPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
