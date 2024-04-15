# Skills
- Language
    - JavaScript
    - Java
    - Python
    - html
- Framework
    - Express, Spring boot3, Django
- Database
    - MongoDB, H2DB, SQLite

 # 특징 및 환경 설정
   ## jsReport
    - Model, View, Controller에 어떤 기술 엔진을 사용하는가?
        - controller(api,router) → router.js가 api역할을 하며, router.js에서 따로 만든 postservice 폴더에서 데이터 가공을 위한 모듈을 꺼내와서 db를 조작하고 템플릿을 렌더링한다.
        - model → 스키마 생성 없는 nosql 몽고 디비를 커넥션한 뒤 controller에서 db 조작
        - view → handlebars로 작성.
    - 초기 설정(모듈 설치)을 해보자.
        1. 먼저 Node.js를 사용하기 위해 초기화를 해준다. → npm init -y
        2. 프로젝트에 필요한 패키지들을 설치한다. → npm i express-handlebars, npm i express, npm i mongoose(odm)등등
    - 파일 구조
        1. configs : 설정 코드
        2. views, layouts : 사용자 ui 코드
        3. services : 데이터 가공 및 서비스 로직 수행 코드
        4. router.js : 컨트롤러 역할, 서비스 동작 코드
        
## javaReport
    - Model, View, Controller에 어떤 기술 엔진을 사용하는가?
    - controller(api,router) → controller가 api역할을 하며, controller에서 db를 조작하고 템플릿을 렌더링하거나 다른 api를 redirect 시킨다.
    - model → dto, entity로 데이터 객체를 생성(스키마 생성)하고 controller에서 db 조작
    - view → mustache로 작성
    - 초기 설정(모듈 설치)
        - 스프링 init에서 필요한 의존성 기능을 주입한다.
        - 의존성으로는 Spring Web, H2 DB, Mustache, Spring Data JPA가 있다.
    - 파일 구조
        - controller : router, service 기능을 수행하고 뷰에서 db의 데이터를 보여주기 위해 Model장치 사용.
        - dto : 원본 데이터를 선언하고 entity 데이터로 1차 가공
        - entity : 1차 가공된 dto를 db에 접근 가능한 메타 데이터로 가공
        - repository : 모든 entity 즉, 데이터를 불러옴
        - templates : 사용자 뷰
## pythonReport
    - 특징 및 환경 설정
    - Model, Template, View에 어떠한 기술 엔진을 적용하는가?
        - controller(api,router) → views.py가 api역할을 하며, views.py에서 db를 조작하고 템플릿을 렌더링하거나 다른 api를 redirect 시킨다.
        - model → models.py에서 데이터 객체를 생성(스키마 생성)하고 views.py에서 db를 조작.
        - view → html로 작성.
    - 초기 설정(모듈 설치)
        1. `python3 -m venv myvenv`으로 가상환경을 생성하고 `source myvenv/bin/activate`으로 실행한다.
        2. `pip install django`로 장고를 설치한다.
        3. `django-admin startproject`으로 새 프로젝트를 생성하고 해당 프로젝트 폴더 위치에서 `python3 manage.py 앱명`으로 앱을 만든다.
        4. settings.py에 앱을 등록해주고 앱 폴더에 위치한 models.py에 데이터와 메타 데이터를 작성한다. 
        5. 모델이 작성 되었으면 마이그레이션으로 모델에 맞는 테이블을 생성하고 마이그레이트 명령어로 db에 저장한다.
        6. 작성된 데이터를 관리하기 위한 관리자 계정을 앱 폴더에 위치한 admins.py에 admin.site.register(myReport)으로 데이터 모델을 등록한다.
    - 파일 구조
        1. myReport : 프로젝트 이름이다. myReport에 위치한 urls.py에 라우팅 코드를 작성한다.
        2. myvenv : 가상 환경을 의미한다. myvenv로 서버를 동작 시킨다.
        3. reportApp : 기능의 중심 역할을 하는 app 폴더다. 사용자 인터페이스 templates, 관리자 계정을 등록하는 [admin.p](http://admin.py)y, 데이터 모델을 생성시키는 models.py를 가진다.
        4. [views.py](http://views.py) : reportApp 폴더에 위치하며 urls.py에서 라우팅되는 서비스다.
