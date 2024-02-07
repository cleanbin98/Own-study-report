from django.contrib import admin
from .models import myReport

# 데이터 모델을 관리자 계정에 등록.
admin.site.register(myReport)