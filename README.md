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
    - 파일 구조를 잡아보자.
        1. configs : 설정 코드
        2. views, layouts : 사용자 ui 코드
        3. services : 데이터 가공 및 서비스 로직 수행 코드
        4. router.js : 컨트롤러 역할, 서비스 동작 코드
    ## javaReport
