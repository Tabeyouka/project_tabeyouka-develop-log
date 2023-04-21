## DBMS
- 데이터베이스를 관리하는 컴퓨터 시스템

### 여러곳에 사용된다
- 은행사이트
- SNS
- 스마트폰
- 등등.. 거의 모든 사이트

### 데이터베이스가 필요한 이유
- 많은량의 데이터에서 필요한 데이터를 사용하기 위해
- 다수가 데이터를 공유해 사용하기 위해
- 데이터의 보존

### DBMS의 종류
- 릴레이션 데이터베이스 (RDB)
  - 엑셀 시트와 같이 2행으로 데이터를 보여준다.
  - sql을 사용해 데이터를 조작
  - 오픈소스
    - MySQL
    - MariaDB
    - PostgreSQL
  - 상용 데이터베이스
    - oracle Database
    - SQL server
    - DB2
- 키 벨류 스토어 (KVS)
  - JavaScript의 오브젝트와 비슷함
- 객체 지향 데이터베이스 (OODB)
  - 데이터를 Object로 관리 현재는 잘 사용하지 않음
- XML 데이터베이스 (XMLDB)
  - 현재는 잘 사용하지 않음

## SQL개요

### SQL이란
- 데이터베이스 테이블 , 행과 열로 나눈 것
### 표준SQL
- ISO 국제표준기관에서 정해진 SQL
- 데이터베이스 별로 사용할 수 있는 기능이 다르다
### 기본적인 SQL의 기술 규칙
- 대문자 소문자 구별을 하지 않는다.
- SQL의 끝에는 ;세미콜론을 쓴다.
- 문자는 ''싱글코트로 감싼다

## RDBMS의 기본적인 용어

### 데이터베이스
- 데이터를 관리하기위해 데이터베이스라는 상자를 만든다.
- 보통 한 어플리케이션에 대해 하나의 데이터베이스를 만든다.
- 테이블은 간단히 말하면 엑셀의 표
- 테이블은 데이터베이스 안에 복수 만들 수 있다.
  - user를 관리하는 user테이블, 상품을 관리하는 상품 테이블 
- 행 : 레코드, 로우 이라고 부른다. 
- 열 : 필드, 컬럼 이라고 부른다.
- 열 이름 : id, name 등 열이 무엇을 뜻하는지를 제일 위에서 알려줌 필드명, 컬럼명 이라고 함

### 쿼리 (query, 問い合わせ)
- 데이터의 검색, 갱신, 삭제, 추출등의 요구를 데이터베이스에 송신하는 것
- 예) 유저정보를 획득하기위해, 쿼리를 던진다.

## 데이터 형(型)

### 데이터 형(型)이란?
- 데이터베이스에선 데이터를 작성할 때 각각의 열에 지정된 형식의 데이터만 입력할 수 있게 설정한다.
- 이 때 지정하는 데이터 형식을 데이터 형이라고 한다.
## 주된 데이터 형(型) 종류
### 수치형 数値型
- int형(정수를 다룬다)
- tinyint형 (작은수를 다룬다.)
  - 127이하의 작은 수를 다룰때 사용
  - 0과 null이 false고 나머지 수는 true
- float형 (부동소수점을 다룬다.)
  - 별로 사용 잘 안함
- double형 (float보다 큰 소수를 다룬다.)
  - 소수를 다룰때 주로 사용
### 문자열형 文字列型
- char형
  - 255문자까지 다룬다.
- varchar형
  - 255문자까지 다룬다.
  - email "nakamura@example.com"과 같은 문자열을 다룰때 사용
- text형
  - 65535문자까지 다룬다.
- 실무에서는 255문자까지는 varchar 그외에는 text로 사용하는 경우가 만핟.
### 날짜, 시간형 日付・時刻型
- date형
  - 날짜 '1000-01-01' 부터 '9999-12-31' 까지를 다룬다.
- datetime형
  - 날짜와 시간을다룬다.
- time형
  - 시간을 다룬다.

## 자주있는 SQL 에러
- DB를 선택하지않았다. (Error Code : 1046 No database selected)
- 스펠링 미스 (명령어, 테이블명 오류)

## 열(컬럼) 별명을 붙여보자
```sql
select name, price from products;
-- name as 이름 (name을 "이름"으로 출력)
select name as 이름, price as 가격 from products;
-- 생략도 가능하다.
select name 이름, price 가격 from products;
```

### 계산식을 더한 열을 출력
```sql
select 
	name 이름,
    price 가격,
    price * 1.08 세금포함
from
	products;

-- 출력되는건 이름, 가격, 세금포함
```

## WHERE
- 조건을 지정해 데이터를 획득가능
```sql
select name 이름, price 가격 from products where price >= 9800;
-- price가 9800이상인 값만 획득한다.
```

### 연산자 연습
- products 테이블에서 전부 획득
```sql
select * from products;
```
- id가 1인 행을 획득
```sql
select * from products where id = 1;
```
- 이름이 商品0003인 행 획득
```sql
select * from products where name = '商品0003';
```
- price가 1000보다 큰 행 획득
```sql
select * from products where price > 1000;
```
- price가 1000보다 작은 행 획득
```sql
select * from products where price < 1000;
```
- price가 100이아닌 행을 획득(2가지 방법)
```sql
select * from products where price != 100;
```
- id가 1 혹은 2 혹은 3인 행을 획득
```sql
select * from products where id in(1, 2, 3);
```
- id가 1 혹은 2 혹은 3이 아닌 행을 획득
```sql
select * from products where id not in(1, 2, 3);
```
- price가 null이 아닌 행을 획득
```sql
select * from products where price is not null;
```
- price가 null인 행을 획득
```sql
select * from products where price is null;
```
- price가 1000부터 1900인 행을 획득
```sql
select * from products where price between 1000 and 1900;
```
- price가 1000부터 1900인 행을 획득(and를 사용)
```sql
select * from products where price >= 1000 and price <= 1900;
```
- price가 1000 혹은 2000인 행을 획득(or 사용)
```sql
select * from products where price = 1000 or price = 2000;
```

## like
- 패턴매칭으로 구분가능한 like
- 구문
  - select 열 from 테이블명 where 열이름 like 와일드카드 문자;
- 와일드카드 문자
  - 문자열의 패턴을 지정
  - '%' 0글자 이상의 임의의 문자열을 가르킨다.
  - '_' 임의의 1글자를 가르킨다.
  - 예)
  - '김%' -> 김으로 시작하는 문자열
  - '%김%' -> 김을 포함하는 문자열
  - '%김' -> 김으로 끝나는 문자열
  - '_김' -> ~김 ~김 두글자로 시작해 김으로끝나는 문자열

## limit
- 취득건수를 제한하는 limit
**10건의 상품데이터를 일란**
```sql
select * from products limit 10;
-- 명시적으로 아래와같이 적는것이 좋다. DB도 다른 언어와 비슷하게 0부터 시작한다 알아두자
select * from products limit 0, 10;
-- 11번 열부터 10개의 데이터 (11~ 20)
select * from products limit 10, 10;
```
- 큰 규모의 데이터베이스에서는 모두 출력하면 컴퓨터가 멈춰버릴수도 있다.
- limit를 지정해주는것이 안전

**연습**
성별이 남자인 users의 id, last_name, gender를 10개만 획득
```sql
select id, last_name, gender from users where gender = 1 limit 0, 10;
```
### 표계산
**select문으로 얻은 데이터를 사용하는 법**
1. 컴퓨터프로그램으로 이용
- 루비, php등의 프로그래밍 언어에서 sql을 데이터베이스에 날려 그 결과를 사용해 화면에 출력하거나 한다. 
2. CSV파일로 내보내어 표계산 소프트웨어에 넣는다.
- mysql워크벤치에서 csv형식으로 내보내서 csv파일을 excel등의 표계산 소프트웨어에 넣는다.

### CSV
- ,로 나눈 텍스트
예)
id,name,price  
1,상품0001,5300
2,상품0002,5900
3,상품0003,5000

### TSV
- [스페이스바]로 나눈 텍스트

## 함수를 사용
- 월 매상
- 테이블 행 수를 출력
- 월별 엑세스 수
- 등등.. 작성해보자

### sum
- 일단 order_time이 2017년1월1일00시00분00초 ~ 2017년2월01일00시00분00초 사이의 데이터를 획득해보자.
```sql
select *
from orders
where order_time >= '2017-01-01 00:00:00'
	and order_time < '2017-02-01 00:00:00';
```
- 여기서는 amount열의 합계치를 알고싶다.
```sql
select sum(amount)
from orders
where order_time >= '2017-01-01 00:00:00'
	and order_time < '2017-02-01 00:00:00';
```
결과 : sum(amount) 3295300  
이렇게 2017년1월1일00시00분00초 ~ 2017년2월01일00시00분00초의 amount의 합계를 획득해보았다.

### avg
- 평균을 획득하는 함수
- 전제품의 평균가격을 구하라
```sql
select avg(price)
from products;
```
결과 : avg(price) 4937.7000

### min
- 최소값을 구하는 함수
- 전제품중 최소값을 구하라
```sql
select min(price)
from products;
```

### max
- 최대값을 구하는 함수
- 전제품중 최대값을 구하라
```sql
select max(price)
from products;
```


### count
- 대상으로 하는 행을 새는 함수
- 유저가 몇명있는지 알려줘
```sql
select count(*) from users;
```
결과 : count(*) 1000
- 여성유저가 몇명있는지 알려줘
```sql
select count(*) from users where gender = '2';
```
결과 : count(*) 474

### 유니크 유저 수를 구한다
- 2017년1월에 접속한 유니크 유저 수를 알려줘
- 여기에서의 유니크 유저는 정해진 집계기간내에 액세스한 유저의 수를 표시하는 수치
```sql
--        distinct(중복제거)
select count(distinct user_id)
from access_logs
where request_month = '2017-01-01';
```
결과 : count(distinct user_id) 621
- 정해진 기간내에 액세스한 유저를 중복없이 획득하였다.

### 데이터의 그룹화 group by
- 都道府県(도도부현)별 유저수를 알려줘
```sql
select prefecture_id, count(*)
from users
-- prefecture_id 별로 그룹을 해당하는 user를 그룹에 넣는다.
group by prefecture_id;
```
결과 예)  
prefecture_id : 1 count(*) : 39 (prefecture_id가 1인 유저는 39명)

**group by를 이용해 기간별로 집계하는 방법을 학습**
- 2017년 월별 유저수를 알려줘
```sql
select request_month
from access_logs
where request_month >= '2017-01-01'
	and request_month < '2018-01-01'
group by request_month;
```
- 위는 request_month를 월별로 그룹한것이다.
```sql
--                 각 그룹에 해당되는 id를 카운트 근데이제 중복없이
select request_month, count(distinct user_id)
from access_logs
where request_month >= '2017-01-01'
	and request_month < '2018-01-01'
group by request_month;
```
 
### 좀더 집약하는 having
- 2017년 액세스로그에서 월별 유니크유저수가 630인 이상인 달을 보여줘
```sql
select request_month, count(distinct user_id)
from access_logs
where request_month >= '2017-01-01'
	and request_month < '2018-01-01'
group by request_month
having count(distinct user_id) >= 630;
```
- 유니크유저수가 630이상인 request_month, user_id수를 출력하였다.

## 실행순서
1. from (대상 테이블 지정)
2. where (조건식 지정)
3. group by (그룹화의 조건을 지정)
4. having (그룹화 한 뒤 조건을 지정)
5. select (획득할 행을 지정)
6. order by (정렬 조건을 지정)
7. limit (획득할 행수를 제한)

### 연습
- 모든 엑세스로그를 보여줘
```sql
select *
from access_logs;
```
- 출력은 2017년1월부터 2017년6월까지만 해줘
```sql
select *
from access_logs
where request_month >= '2017-01-01' and request_month < '2017-07-01';
```
- 월별 리퀘스트수를 알려줘
```sql
select request_month, count(*)
from access_logs
where request_month >= '2017-01-01' and request_month < '2017-07-01'
group by request_month;
```
- 엑세스수가 100이상인 달만 제출해줘
```sql
select request_month, count(*)
from access_logs
where request_month >= '2017-01-01' and request_month < '2017-07-01'
group by request_month
having count(*) >= 1000;
```