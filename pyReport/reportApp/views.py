from django.utils import timezone
from django.shortcuts import redirect, render
from .models import myReport

# Create your views here.
def home(request):
    articles = myReport.objects.all()
    return render(request, 'home.html', { 'articles': articles })

def detail(request, id):
    articles = myReport.objects.get(id = id)
    return render(request, 'detail.html', { 'articles': articles })

def new(request):
    return render(request, 'new.html')

def create(request):
    newArticle = myReport()
    newArticle.title = request.POST['title']
    newArticle.body = request.POST['body']
    newArticle.pub_date = timezone.now()
    newArticle.save()

    return redirect('detail', newArticle.id)

def edit(request, id):
    editArticle = myReport.objects.get(id= id)
    return render(request, 'edit.html', {'article': editArticle})

def update(request, id):
    updateArticle = myReport.objects.get(id= id)
    updateArticle.title = request.POST['title']
    updateArticle.body = request.POST['body']
    updateArticle.pub_date = timezone.now()
    updateArticle.save()

    return redirect('detail', updateArticle.id)

def delete(request, id):
    deleteArticle = myReport.objects.get(id= id)
    deleteArticle.delete()

    return redirect('home')