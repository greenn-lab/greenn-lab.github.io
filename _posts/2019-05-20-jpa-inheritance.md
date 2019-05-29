---
layout: post
title: 'JPA @Inheritance'
date: 2019-05-20T21:00
tags: [java, jpa]
---

[김영한님의 자바 ORM 표준 JPA 프로그래밍](http://www.yes24.com/Product/Goods/19040233?scode=032&OzSrank=1) 으로 스터디를 하면서 정리한 내용이었는데, 찾아보기 쉽게 간략화 해봅니다.  
[github](https://github.com/greenn-lab/blog-codes-java-jpa-2019-05-20-jpa-inheritance) 에 예제 소스도 올라가 있고요.

# 상속 방식

RDB 상에서 상속의 개념으로 Entity를 만들 때 `@Inheritance` 를 사용하잖아요.  
그런데 방식이 3가지가 있어서, 각각 다른 테이블과 대응하게 되더라고요.

## 1. JOINED
각 Entity 별로 따로 테이블이 만들어 지는 방식이에요.  
```java
@Entity
@Inheritance(strategy = InherianceType.JOINED)
@DiscriminatorColumn(name = "MEMBER_TYPE")
abstract class Member {
  @Id
  @Column(name = "MEMBER_ID")
  private Long id;

  private String username;
  private Integer password;
  ...
}
```
```java
@Entity
@DiscriminatorValue("ADMIN")
class Admin extends Member {
  @Column(name = "DEPT_CD")
  private String department;
}
```
```java
@Entity
@DiscriminatorValue("SELLER")
class Seller extends Member {
  private String company;
}
```
```java
@Entity
@DisciriminatorValue("CUSTOMER")
class Customer extends Member {
  private String email;
}
```
이렇게 되면 다음과 같은 관계를 가지게 되는 거죠.
![](/files/20190520/inheritance-joined.png)

> `Member` 에 `@DiscriminatorColumn(...)` 을 생략 할 수 있어요.  
> 상속받는 대상을 구분할 값이 없다면 굳이 넣지 않아도 되는거죠. 당연히 `@DiscriminatorValue(...)` 도 안써도 되겠네요. 

## 2. SINGLE TABLE
```java
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminationColumn(name = "MEMBER_TYPE")
class Member {
  @Id
  @Column(name = "MEMBER_ID")
  private Long id;
  
  private String username;
  private String password;
  private String company;
  
  @Column(name = "DEPT_CD")
  private String department;
  
  private String email;
}
```
이런식으로 하나의 테이블에 몽땅 넣는 거에요.    
나머지 클래스는.
```java
@Entity
@DiscriminatorValue("ADMIN")
class Admin extends Member {
}
```
```java
@Entity
@DiscriminatorValue("SELLER")
class Seller extends Member {
}
```
```java
@Entity
@DiscriminatorValue("CUSTOMER")
class CUSTOMER extends Member {
}
```
그러면 Schema는 이렇게 생성됩니다.  
![](/files/20190520/inheritance-single-table.png)  
 

## 3. TABLE PER CLASS
```java
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
abstract class Member {
  @Id
  @Column(name = "MEMBER_ID")
  private Long id;

  private String username;
  private String password;
}
```
어차피 Entity 가 상속 대상 항목별로 따로 생겨날 거니까 `@DiscriminationColumn(Value)` 는 필요 없군요.
```java
@Entity
class Admin extends Member {
  @Column(name = "DEPT_CD")
  private String department;
}

```
```java
@Entity
class Customer extends Member {
  private String email;
}
```
```java
@Entity
class Seller extends TablePerClassMember {
  private String company;
}
```
이렇게 하면,
![](/files/20190520/inheritance-table-per-class.png)
이렇게 Schema 나옵니다.  
이 전략은 `UNION ALL` 을 사용하게 되어서 비추 되는 것 같고요.
