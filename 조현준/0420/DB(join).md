**연습문제**
- 2017년1월의 도쿄도에 사는 유저의 주문정보를 보여줘 user id로 정렬해줘
- 획득하는 열
  - 주문id
  - 주문일시
  - 주문금액합계
  - 유저id
  - 성
  - 이름
```sql
select 
	o.id 주문id,
    o.order_time 주문일시,
    o.amount 주문금액합계,
    u.id 유저id,
    u.last_name 성,
    u.first_name 이름
    
from orders o
inner join users u
on o.user_id = u.id
where
	u.prefecture_id = 13
	and o.order_time > '2017-01-01 00:00:00'
    and o.order_time < '2017-02-02 00:00:00'
order by o.id;
```
### 외부결합 outer join
- 한쪽 테이블의 정보가 전부 출력된다. 테이블의 결합
- 외부결합은 결락이 있는 데이터를 다루는 결합
```sql
[테이블 A]
id | name
1  | Alice
2  | Bob
3  | Carol

[테이블 B]
id | age
1  | 25
4  | 30
5  | 35

[조인 결과 (Inner Join)]
id | name  | age
1  | Alice | 25
-- 테이블 A와 테이블 B의 id 값이 일치하는 경우만 결과에 포함되기 때문에 bob과 carol은 안나온다.

[조인 결과 (Outer Join)]
id | name  | age
1  | Alice | 25
2  | Bob   | NULL
3  | Carol | NULL
4  | NULL  | 30
5  | NULL  | 35
-- 한쪽 테이블에만 있는 값인 2, 3, 4, 5와 같은 값들도 결과에 포함되어 있다.
-- 이렇게 한쪽 테이블에만 있는 값도 다루는것이 outer join
```
### left outer join
- 왼쪽 테이블을 기준으로 조인을 수행한다.  
- 왼쪽 테이블에만 존재하는 데이터를 포함하여 결과를 반환
- 오른쪽 테이블에 일치하는 데이터가 없는 경우 NULL 값으로 채워진다.
### right outer join
- 오른쪽 테이블을 기준으로 조인을 수행한다.
- 오른쪽 테이블에만 존재하는 데이터를 포함하여 결과를 반환
- 왼쪽 테이블에 일치하는 데이터가 없는 경우 NULL 값으로 채워진다.