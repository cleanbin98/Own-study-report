from django.db import models

# 데이터 모델 객체
class myReport(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField()
    body = models.TextField()

    def __str__(self):
        return self.title