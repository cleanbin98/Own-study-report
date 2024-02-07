from django.utils import timezone
from django.shortcuts import redirect, render
from .models import myReport

# Create your views here.

#메인 홈
def home(request):
    # articles 객체로 데이터 모델 myReport의 모든 데이터 객체를 받아온다.
    articles = myReport.objects.all()
    # articles로 받아온 데이터를 템플릿과 함꼐 렌더링한다.
    return render(request, 'home.html', { 'articles': articles })

#상세 페이지
def detail(request, id):
    # articles 객체로 데이터 모델의 특정 데이터를 id로 지정해서 받아온다.
    articles = myReport.objects.get(id = id)
    return render(request, 'detail.html', { 'articles': articles })

#글 작성 페이지
def new(request):
    return render(request, 'new.html')

#글 생성후 상세 페이지로 리다이렉트.
def create(request):
    newArticle = myReport()
    newArticle.title = request.POST['title']
    newArticle.body = request.POST['body']
    newArticle.pub_date = timezone.now()
    newArticle.save()

    return redirect('detail', newArticle.id)

# 수정 페이지
def edit(request, id):
    editArticle = myReport.objects.get(id= id)
    return render(request, 'edit.html', {'article': editArticle})

# 업데이트후 상세페이지로 리다이렉트.
def update(request, id):
    updateArticle = myReport.objects.get(id= id)
    updateArticle.title = request.POST['title']
    updateArticle.body = request.POST['body']
    updateArticle.pub_date = timezone.now()
    updateArticle.save()

    return redirect('detail', updateArticle.id)

# 삭제 후 home 페이지로 리다이렉트.
def delete(request, id):
    deleteArticle = myReport.objects.get(id= id)
    deleteArticle.delete()

    return redirect('home')