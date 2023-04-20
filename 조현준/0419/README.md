## order by
- select로 획득한 데이터를 정렬
- asc (오름차순) (생략가능)
```sql
select * from products order by price asc;
```
- desc (내림차순)
```sql
select * from products order by price desc;
```

- 여러 행을 한번에 정렬 가능
```sql
select * from products order by price desc, id asc;
```

## 반올림 (四捨五入)
- 반올림을 해주는 round함수를 이용
```sql
-- 함수없는 버전
select id, name, price * 1.08 from products;
-- 뒤에오는 파라미터는 반올림할 소수점 자릿수를 의미
select id, name, round(price * 1.08, 0) from products;

select round(10.555, 0);

select round(10.555, 1);
```

## 문자열을 붙이는법
- concat함수를 사용
```sql
select concat(last_name, ' ', first_name, '씨')
from users;
```

## 날짜 함수
- 현재 날짜 (current_date)
- 현재 시간 (current_timestamp)
- n일 후 날짜 (d + n)
- n일 전 날짜 (d - n)
- x시간 후 시간 (interval 'x hour')
- x시간 전 시간 (-interval 'x hour')
- extract.. (날짜나 시간의 특정 부분 까지 출력)

## 테이블의 결합

### 테이블의 정규화란
- 테이블을 나누어 정보의 중복을 없애는 작업
- (장점)
  - 데이터관리가 용이해진다.
  - 데이터용량 절감
### 테이블의 결합이란
- 테이블끼리 어떠한 조건으로 정규화 없는 상태로 만드는것

### 기본키
- 하나의 행을 특정할 수 있는 열
### 외래키
- 다른 테이블과 관계짓기위해 사용하는 열
- 하나의 행을 특정할 수 있는 열
- 외래키는 관련된 테이블에서 기본키가 된다.
### 릴레이션쉽의 종류
- 일 대 다
  - 유저와 주문의 관계
  - 블로그 글 작성자와 글작성의 관계
  - 부서와 사원의 관계
- 다 대 다
  - 상품과 상품카테고리의 관계
  - 유저와 조작권환의 관계
- 일 대 일
### 내부결합 inner join
- 테이블을 결합
- 고객을 보여줘 그런데 도도부현이 id로 되어있으면 못알아보니까 prefectures 테이블의 name을 사용해줘
```sql
select 
	users.id,
	users.last_name,
  users.first_name,
  prefectures.name
from users	
inner join prefectures
on users.prefecture_id = prefectures.id;
```
- sql문 해석
위의 SQL 문은 "users" 테이블과 "prefectures" 테이블을 INNER JOIN을 사용하여  
"users.prefecture_id"와 "prefectures.id"를 조인하고,  
"prefectures" 테이블의 "name" 컬럼 값을 가져온다.  
**테이블에 별명을 붙여보자**
```sql
select 
-- 간결해진다
	u.id,
	u.last_name,
  u.first_name,
  p.name
-- users테이블의 별명을 u로 설정
from users as u
--     prefectures테이블의 별명을 p로 설정
inner join prefectures as p
on u.prefecture_id = p.id;
```

## 기술(記述)순서
1. select (획득할 행을 지정)
2. from (대상 테이블 지정)
3. 결합관리 (join)
4. where (조건식 지정)
5. group by (그룹화의 조건을 지정)
6. having (그룹화 한 뒤 조건을 지정)
7. order by (정렬 조건을 지정)
8. limit (획득할 행수를 제한)