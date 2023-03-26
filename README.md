# 손태인
---

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
