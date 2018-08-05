# Webpack을 활용한 작업환경 구축
18.08.07 HACKERS WP_WP2 이명종 

## 발표자 소개
<img src="https://github.com//qnfzks55/webpack_lmj/blob/master/profile.jpg?raw=true" />
이명종

## 주제 선정 이유
주제가 고갈되는 바람에

## 목차

* [IDE 선택](#ide-선택)
* [Node.js & NPM](#node.js-npm)
* [ES6 & Babel](#es6-babel)
* [SASS](#sass)
* [Webpack](#webpack)
* [참고 링크](#참고-링크)

## IDE 선택

<img src="https://github.com//qnfzks55/webpack_lmj/blob/master/webstorm.png?raw=true" />

### 웹스톰 (Webstorm)

1. `HTML,CSS,JS` 프론트엔드에 최적화된 IDE
2. 지속적인 업데이트로 `es6` 및 `react`, `Vue.js` 까지 대세 언어 지원
3. 코드 검사 및 탐색, 리팩토링 지원
4. `Node.js` 지원
5. 강력한 `VCS` 지원
6. `Emmet` 및 젠코딩 지원으로 빠른 코딩 가능
7. 다양한 확장자의 `watcher` 지원 (`sass` 같은 경우는 `ruby` 설치 후 `gem` 인스톨 설치)

> 이외에도 워낙 좋고 빠른 IDE가 잘출시되어있으므로,<br />각 IDE의 장단점들이 있으므로 개인이 판단하여 취향껏 입맛대로 골라 쓰면 될듯함.

## Node.js & NPM

<img src="https://github.com//qnfzks55/webpack_lmj/blob/master/npm_node.jpg?raw=true" />

### Node.js
1. 자바스크립트 문법으로 웹서버나 smtp 서버 등과 같은 서버 프로그램을 작성할 수 있게 하는 서버 사이드 자바스크립트 언어.
2. `Express.js` 프레임워크를 사용하면 번거로운 작업들을 해결해주어 빠르게 웹서버를 구축할 수 있다.
3. 그러나 클라이언트 & 서버개념 등 웹의 구조 학습이 필요하다.

### NPM
1. Node.js 기반 패키지 모듈들을 관리하는 도구.
2. 작은 모듈들을 필요함에 따라 설치하여 개발자에게 편리함을 제공한다.
3. `Terminal` 에서 명령어를 입력하여 실행한다.
4. `package.json` 을 설치하여 이 파일로 모듈들을 관리한다.

### 명령어

#### 1) 설치
`npm install` (모듈 설치)<br />
`npm install --save-dev package` (개발모듈로 패키지 설치)<br />
`npm install --save package` (배포모듈로 패키지 설치)<br />
`npm install --g package` (global로 패키지설치)
#### 2) 제거
`npm uninstall package`
#### 3) package.json 생성
`npm init`<br />
`npm init y` (옵션 설정없이 바로 package.json을 생성해주는 명령어)

### Package.json
```javascript
{
    "name": "name",
    "version": "1.0.0",
    "description": "설명",
    "main": "webpack.config.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    },
    "author": "Author",
    "license": "ISC",
    "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
      "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    },
    "dependencies": {
    "webpack": "^4.16.1"
    }
}
```
1. Npm을 통하여 설치한 의존성 모듈들의 버전 관리와 프로젝트에 대한 관리를 하는 파일.
2. `Terminal` 에서 `npm init` 명령어를 통하여 생성
3. `script` 에서 `run` 명령어를 설정해주어 실행할 모듈을 설정해줄수 있다.
4. 의존성모듈들은 `dependencied` 모듈에, 개발의존성모듈들은 `devDependencies` 모듈로 설치하여준다.

## ES6 & Babel

<img src="https://github.com//qnfzks55/webpack_lmj/blob/master/babel.jpg?raw=true" />

`Typescript`, `CoffeSCript`, `ES6` 등 기존 `Javascript` 문법이 아닌 각각의 문법으로 코딩된 소스를 `Javascript` 문법으로
`transcompile` 해주는 모던 웹기술에서 필수적인 모듈이다.

### 사용법

#### 1) 전역으로 `babel` 을 설치한다.
`$ npm i -g babel-cli`
#### 2) 개발 의존성모듈로 `babel-cli`, `babel-preset-2015` 모듈 설치
`$ npm i –D babel-cli babel-preset-2015`
#### 3) `.babelrc` 파일을 생성한다.
```javascript
{
  "presets" : ["es2015"]
}
```
#### 4) 폴더 구조
| es6/<br />
|   |- script.js<br />
|- .babelrc<br />
|- index.html<br />
|- package.json

#### 5) es6/script.js
```javascript
const test = 5;
const clickEvent = () => console.log(test);
```
#### 6) `Terminal` 에서 `babel` 명령어로 `transpiling` 해준다.
`$ babel es6/script.js –d script -w`
#### 7) 트랜스파일된 script.js 파일을 확인해보면
```javascript
var test = 5;
var clickEvent = function clickEvent() {
    return console.log(test);
};
```
