# 손태인
---

  7주차 23.04.10
  -----

  ### Hook 

    Hook 이란?
    여러가지의 함수를 의미한다.

  ### useState()	

  스테이트를 사용할 수 있게 해주는 훅
  훅에서는 변수의 각가에 셋함수가 별도로 존재함


    Const [변수명, set변수명] = useState(초기값)

  ## useEffect()

  Side effect를 수행하기 위한 훅

    리액트의 Side effect란? 
    이펙트라는 단어에 초점을 두어 서버에서 데이터를 받아 오는것,
    
  수동으로 돔변경등 
  이러한 작업은 다른 컴포넌트에 영향을 미칠 수 있으며 엔더링 중에는 작업이 완료 되지 않기 때문이다. 즉, 렌더링을 마쳐야 사용할 수 있다.

    useEffect( 이펙트 함수, 의존성 배열);

```javascript
  useEffect(()=>{
  컴포넌트가 마운트 된 이후,
  의존성 배열의 값이 하나라도 변경될 경우 이펙트함수가 실행됨
  의존성 배열에 빈 배열이 들어가면 마운트와 언마운트 시에 한번 씩 실행됨
  의존성배열이 없으면 업데이트 마다 실행됨
    …. 
    Return () =>{
  컴포넌트가 언마운트 되기전에 실행
    }
  },[의존성1, 의존성2, …])
```
 ### Memoization
    연산량이 높은 작업의 결과값을 저장해 두었다가 같은 값이 들어 왔을때 바로 반환해 주는 것
    그러한 값을 memoized value라고 함

  ### useMemo()
  연산 속도를 줄이기 좋다
  렌더링 도중에 실행된다.*sideEffect를 넣으면 안된다
  의존성 배열을 안넣으면 업데이트 마다 실행되기에 의미가 없음

```javascript
  Const memoizedValue = useMemo(
    () => {
      return computEXpensiveValue(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
  );
```

  ### useCallback()
  useMemo()과 유사하지만 함수를 반환함

```javascript

  Const memoizedCallback = useCallback(
    () => {
      doSomthing(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
  );
```
  useCallback을 사용하지 않고 컴포넌트에 함수를 정의하면 컴포넌트가 렌더링 될 때마다 함수가 새로 정의됨.

  

  6주차 23.04.03
  -----

  ### State

  state란?
  상태를 의미 하는 영어 단어로 
  리액트에서는 데이터를 의미한다.  
  보통 리액트에서는 사용자가 state를 정의하며, 렌더링, 데이터흐름등의 쓰이는 값만 state에 넣고, 그외의 값은 인스턴스 필드로 정의한다.

  state는 자바스크립트의 객체이며, 생성자를 가진다.
  또한, 생성자에서 정의되며, 직접 수정할 수 없다.(하지마라!)  
  setState() 훅을 통해 수정을 하면 된다.

  ### LifeCycle

  리액트의 생명주기 .. 
  생성부터 소멸까지  

  컴포넌트가 게속해서 살아있는 것이 아닌 사라진다는 것을 기억하자  



    출생 (Mounting)  
    Constructor 실행   
    컴포넌트 렌더링  
    Component didMount() 메서드가 실행  

    인생(Updating)  
    New props  
    setState()   
    forceUpdate() 강제 업데이트  
    컴포넌트가 계속 렌더링이 됨  
    componentDidUpdate() 메서드가 실행  

    사망(Unmouting)  
    ComponentWillUnmount() 메서드가 실행   



  5주차 23.03.27
  -----

  ### Component

  리액트는 컴포넌트의 조합으로 이뤄진다. 자바스크립트의 함수와 매우 유사하다.  
  주로 함수 컴포넌트를 사용함  
  컴포넌트는 모두 대문자로 시작  
  소문자를 쓰면 DOM태그로 인식한다.


  ```javascript
  함수형 컴포넌트
  function Welcome(Props) {
	  return <h1> 안녕, {props.name}</h1>;
  }
  ```

  ```javascript
  클래스형 컴포넌트
  class Welcome extends React.Component {
	  render() {
		  return <h1> 안녕, {props.name}</h1>;
	  }
  }

  클래스 컴포넌트는 모두 React.Component를 상속 받음
  ```



  ### Element

  리액트 엘리먼트는 돔엘리먼트의 가상 버전이다.  
  엘리먼트는 화면에 보이는 것들을 기술 해준다  
  리액트 엘리먼트는 자바스크립트 객체로 존재한다(불변성)  

  불변성이란!  
  Immutable(불변성)  
  -한 번 생성된 엘리먼트는 변경이 불가하다, 생성 후에는 칠드런이나 어트리뷰트를 바꿀 수 없다.  
  -변경할 때는 엘리먼트를 새로 생성하여 기존의 엘리먼트와 변경함  
  -즉, 상태(state)가 변경될 때 마다 새로 생성한다.  
    

    React.createElement(
	  type,
	  [props],
	  […children]
    )

  엘리먼트는 위와 같은 구조로 생성되며 실제 생성 되었을 때는 
    
    {	
	    type :’button’,
		  props: {
		    className : ’bg-green’,
		    children: {
				    type: ‘ b’,
            props : {
                children : ‘Hello, element!’
				    }
		    }
	    }
    }
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    <button class = ‘bg- green’>
	  <b>
		  Hello, element!
	  </b>
    </button>

  위와 같은 형태로 생성이 된다.



  4주차 23.03.20
  -----

  ### JSX 

  JSX란 Javascript + XML 이다. 즉 자바스크립에 XML이 포함된 파일 형싱라고 생각하면 된다.  
  이것이 어떤 의미인지는 다음 코드를 보자,

    const hello = <h1>Hello!!</h1>;

  위의 코드를 보면 알 수 있듯이 메서드를 통해 xml 문장을 만드는 것이 아니라, 객체에 xml을 담을 수 있음으로써 더욱 간결하게 태그를 활용할 수 있게 된다.  

  하지만, 몇가지 제약이 존재하는데, jsx내에서 js 문법을 사용할 경우 {} 를 통해 사용하면 된다.  

    const style = { background: black, font:ariel,}

    return =(
      <div style={style}>
          <h1 style={ color: white }>Hello!!!</h1>
      </div> 
    )
    
  3주차 23.03.13
  -----  
  
  
  ## React 
  
  리액트는 웹페이지 제작을 위한 JS라이브러리이다
  주로 SPA(Single Page Application)으로 제작된다.  
  리액트는 사용자의 편의를 위해  VirtualDOM을 이용한 비동기 처리방식으로 더욱 간편하고 빠른 렌더링 속도를 제공한다.  
  컴포넌트를 이용하여 재사용성을 높여 개발속도를 줄이고 매우 활발한 커뮤니티로 빠른 수정을 이루고 있다. 

  --- 
 ### VirtualDOM 

 VirtualDOM이란 Reac가 렌더링 되는 가상의 Document Object Model로 실제 보여지는 실물 DOM과는 다르기 업데이트와 렌더링을 비동기로 처리할 수 있다.


 ### 비동기 처리

 비동기 처리방식은 업데이트가 일어난곳에서 부모노드와 상관없이 오로지 업데이트 된 곳만 다시 렌더링 되는 방식을 뜻한다.

 ### 컴포넌트  

 컴포넌트란 리액트의 객체 단위로 리액트는 전부 컴포넌트로 이루어져있다.  
 컴포넌트를 더욱 작은 범위기능으로 나눌수록 재사용성이 증가한다.
 하지만 아무 기능이 없는 컴포넌트는 의미가 없음으로 잘 생각하여 나누어야 한다.


  ---
    
      
  2주차 23.03.06 
  -----
  
  ## HTML(Hyper Text Markup Language)
  
  웹 사이트의 뼈대를 세우는 기초로 </> 형식을 통해 구성된다.
  
  ---
  
  ## CSS(Cascading Style Sheet)
  
  웹 사이트의 디자인을 할 수 StyleSheet언어이다.  
  
  ---
  
  ## JS(java script)
  
  동적인 웹사이트를 구현하기 위한 스크립트 언어로 다양한 기능과 반응을 추가 할 수 있다.
  es6의 개정으로 많은 변화가 생겼다..
     
  ## JSON  
  자바스크립트를 위한 파일 형식의 하나로 key와 value로 이뤄져있는 데이터를 갖는다.   
  
  함수의 선언 
  
  var   재선언 O 재할당 O  
  let   재선언 X 재할당 O  
  const 재선언 X 재할당 X   
  
  화살표 함수
  
  ```javascript
    const 변수명 = () => {}
  ```
  
  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
