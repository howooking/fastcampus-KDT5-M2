# 🎬 영화 검색

## 결과물

[예시](https://stupefied-hodgkin-d9d350.netlify.app/)<br>
[결과물](https://fastcampus-kdt-5-m2.vercel.app/)

---

## 작업 환경

- 윈도우
- 구글 크롬 브라우저
- 1552 \* 856

---

## 사용 기술

- React
- Typescript
- Vite
- Tailwind CSS
- Eslint & Prettier

---

## 요구사항

필수 요구사항은 꼭 달성해야 하는 목표로, 수정/삭제는 불가하고 추가는 가능합니다.  
선택 요구사항은 단순 예시로, 자유롭게 추가/수정/삭제해서 구현해보세요.  
각 요구사항은 달성 후 마크다운에서 `- [x]`로 표시하세요.

---

### ❗ 필수

- [x] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [x] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [x] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 영화와 관련된 기타 기능도 고려해보세요.

---

## 고찰

- 예시의 기능과 동일하게 만듬
- 추가적인 기능 없음
- 디자인적으로 예시와 유사하나 디테일한 부분이 다르며 전환효과 추가
- 영화 상세 페이지 ("/movie/[movieId]")에서 Navbar의 Movie 버튼을 눌렀을 때 URL은 변하지만 화면은 변하지 않음 → useEffect dependancy추가

```js
useEffect(() => {
  getMovie(movieId);
}, [movieId]);
```

- Frozen2를 제외한 영화 상세 페이지에서 Navbar의 Movie 버튼이 active되지 않음. NavLink태그의 isActive속성을 사용할 수 있는 방법에 대해 고민 → url에서 movie가 있는지를 boolean값으로 return하고 Button 컴포넌트에 조건문 추가

```js
const isMovieActive = window.location.href.includes('movie');
<Button
  name={item.name}
  active={isActive || (item.name === 'Movie' && isMovieActive)}
/>;
```
