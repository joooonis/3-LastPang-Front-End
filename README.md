## 그로스톤 3기, 라스트팡(1등했담)

![image](https://github.com/joooonis/3-LastPang-Front-End/assets/92621861/e1f247ca-3bc1-45cc-a4f1-b4e73ee7624d)

2주동안 기업의 문제상황에 대한 솔루션을 제안하는 실무 협업 프로젝트입니다. 

[그로스톤 회고](https://velog.io/@xowns3213/%EA%B7%B8%EB%A1%9C%EC%8A%A4%ED%86%A4-%ED%9B%84%EA%B8%B0)

## 리팩토링 예정
1. toss, useFuunel
   - 전역변수 사용하지 않고 Funnel 방식으로 상태 관리해보기 (50% 완)
   - 좀 더 추상화를 거쳐서 컴포넌트 및 훅으로 분리해보기(합성 컴포넌트 사용해보기??)
2. react-hook-form + forwardRef
   - forwardRef 사용하는 방식으로 Input 컴포넌트 개선 (완)
   - 그런데 두 번 ref를 forwarding 한다면?
   - 차라리 라이브러리 사용을 안하는 것도 방법일듯
3. VE 패턴 정리
   - 구현을 위해 스타일 중복 등 마구잡이식으로 사용, 패턴 정리 해봄직 함  
