# lesson5

branch: init, template

## create-react-app

```console
npx create-react-app --script-version 3.0.1 react-hooks-101
```

- `--script-version 3.0.1` でcreate-react-appのバージョンを指定できる。

- 101は入門の意

# lesson5

## create-react-app

```console
npx create-react-app --script-version 3.0.1 react-hooks-101
```

- `--script-version 3.0.1` でcreate-react-appのバージョンを指定できる。

- 101は入門の意

ここまでinitブランチ。templateブランチで不要なファイル等を削除する

<br />
<br />

# lesson6

branch: hello-react-hooks

setStateで直前のstateの値を使うとき、setStateにはcb関数を渡す。

cb関数の引数は直前のstate、戻り値は新しいstate

```js
setState((prevState) => {
  return newState
});
```

<br />
<br />

# lesson7

branch: multiple-states

## 複数のstateに初期値を設定する

かっこいい書き方が２種類ある

### 書き方１

```js
// コンポーネントの中で
const initialStates = {
  name: '',
  price: 1000
}

const [name, setName] = useState(initialStates.name);
const [price, setPrice] = useState(initialStates.price);
```

### 書き方２

```js
// propsで初期値を受け取る
const App = (props) => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  // 略
}

// コンポーネントの外で
App.defaultProps = {
  name: 'sample',
  price: 1000
}
```

<br />
<br />

# lesson8

branch: object-and-useState

## 複数の値をステート管理する方法２種類

Appコンポーネントはステートの初期値をデフォルトプロップスで受け取るものとする

```js
const App = (props) => {
  // 略
}

App.defaultProps = {
  name: 'sample',
  price: 1000
}
```

### 1. nameとpriceをそれぞれステート管理する。

lesson8までの書き方

```js
// ステートを宣言
const [name, setName] = useState(props.name);
const [price, setPrice] = useState(props.price);
}

// ステートを更新
setName('hogehoge');
setPrice(999)

// ステートを初期値にリセット
setName(props.name);
setPrice(props.price);
```

### 2. nameとpriceの値をもつオブジェクトをステート管理する。

```js
// ステートを宣言
const [state, setState] = useState(props);

// ステートを更新
setState({...state, name: 'hogehoge'});
setState({...state, price: 999});

// ステートを初期値にリセット
setState(props);

// 個々の値を呼び出すとき、少し冗長になるので
console.log(state.name);
console.log(state.price);

// あらかじめ変数に分割代入しておくといい(ステート宣言の直後に書くとよさそう)
const { name, price } = state;
console.log(name);
console.log(price);
```

<br />
<br />

# lesson9

branch: useEffect

useEffect概要(とくに新しい知見なし)

<br />
<br />

# lesson10

branch: なし

状態遷移表について説明

<br />
<br />

# lesson11

branch: install-bootstrap

## bootstrapをインストール

```
yarn add bootstrap@4.3.1
```

componentsディレクトリ作成。App.jsをcomponentsディレクトリに移動。

## bootstrapをインポート(jQuery不要なスタイルのみ)

```js
// App.js

import 'bootstrap/dist/css/bootstrap.min.css';
```

参考: https://getbootstrap.jp/docs/4.5/getting-started/webpack/

<br />
<br />

# lesson12

branch: create-reducer-for-events

```console
mkdir src/reducer
touch src/reducer/index.js
```
<br />
<br />

# lesson13

branch: use-reducer-with-useReducer

```js
// App.js

import react, { useReducer } from 'react';

import reducer from '../reducers';
```

## useReducer

useReducer関数は引数にreducer関数とstateの初期値を受け取り、stateとdispatch関数を返す。

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

## dispatch関数

stateを更新する関数。

引数はオブジェクトで、typeプロパティをもつ。
このオブジェクトをactionオブジェクトと呼ぶ。

dispatch関数を呼び出すと内部的にreducer関数が呼び出される。

reducer関数は現在のstateとaction
オブジェクトを受け取り、switch文でaction.typeに応じて条件分岐し、値を返す。

この値でstateを更新する。

actionオブジェクトにはtypeプロパティ以外にも好きなプロパティを持たせて、reducer関数の中で使っていい。

```js
dispatch({
  type: 'CREATE_EVENT',
  title,
  body
})
```

## e.preventDefault();

buttonでページ全体がリロードしてしまわないように

<br/>
<br/>

# lesson14

branch: display-events

<br />
<br />

# lesson15

branch: delete-all-events

<br />
<br />

# lesson16

branch: separate-components 

リファクタリング

# lesson17

branch: types-of-action-like-constants

リファクタリング

複数箇所で使う文字列は同名の定数に格納して扱うと、タイポを防げる。

vscodeの場合、タイポしたら赤い波線が出る。

action.typeの値は、actions/index.jsで一括管理し、各コンポーネントでimportするのが慣習。

```js
// actions/index.js
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const DELETE_ALL_EVENTS = 'DELETE_ALL_EVENTS'
```

```js
// reducers/index.js
import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions'
```

<br />
<br />

# lesson18

branch: なし

Prop Drilling問題(propsのバケツリレー)について解説

<br />
<br />

# lesson19

branch: create-react-context

## コンテキストを作る

createContextでコンテキストを作る

```js
// contexts/AppContext.js

import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;
```

共有するデータをもつコンポーネントと、そのデータを受け取るコンポーネントでimportする。

<br />
<br />

# lesson20

branch: checkout setup-context-provider 

## 親コンポーネント(ふつうトップレベルコンポーネント)からContext.Providerで値を渡す

```js
// 親コンポーネントで
import AppContext from '../context/AppContext';

  //略

return ( 
  <AppContext.Provider value={/* 何らかの値 */}>
    
  </ AppContext.Provider>
)
```

## Context.Providerから渡された値をContext.Consumerで受け取る 

```js
// 子コンポーネントで
import AppContext from '../context/AppContext';

  //略

return(
  <AppContext.Consumer>
    {value => /* コンテクストの値に基づいて何かをレンダーします */}
  </AppContext.Consumer>
);
```

関数の引数としてvalueを受け取る。わかりづらいので非推奨。useContextを使おう

## Context.Providerから渡された値をuseContextで受け取る

```js
// 子コンポーネントで
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

    //略

const value = useContext(AppContext);
```

<br />
<br />

# lesson21

branch: solve-prop-drilling-issue

useContextを使ってリファクタリング。PropDrilling問題を解消。

stateやdispatchをpropsで親から子コンポーネントに渡すのではなく、Context.Providerでトップレベルコンポーネントから子孫コンポーネント渡す。子孫ではuseContextでそれらを受け取る。このときstateやdispatchはトップレベルコンポーネントで定義する。

<br />
<br />

# lesson22

branch: なし

reactDeveloperTool

イベントを管理するreducer

ログを管理するreducer

2つのreducerをReduxのcombineReducersを使って1つのreducerに統合する

参考: https://redux.js.org/api/combinereducers

統合してできたrootReducerを、通常のreducerと同様にuseReducerの第一引数に渡す

<br />
<br />

# lesson23

branch: install-redux

reduxをインストールする 

```console
yarn add redux@4.0.1
```

<br />
<br />

# lesson24 

branch: refactor-events-reducer

reducerをリファクタリングする

既存のreducerファイルの名前を変える

reducers/index.js → reducers/events.js

```console
git mv src/reducers/index.js src/reducers/events.js
```

rootReducerのファイルreducers/index.jsを作成

```console
touch src/reducers/index.js
```

combineReducerとeventsをimportする。

combineReducers()にeventsリデューサーを持つオブジェクトを渡す。


これの返り値がルートリデューサーなのでそのままexportする。

```js
export default combineReducers({ events });
```

App.jsにてルートリデューサーをimportし、useReducerにわたす。

useReducerの第２引数に渡すステートの初期値initialStateはオブジェクトで`{ events: [] }`

`{ 個々のreducer名: そのreducerが管理するステートの初期値 }`

eventsリデューサーで管理するステートの値は`state.events`


```js
// App.js
import reducer from '../reducers';

// Appコンポーネント内で
const initialState = {
  events: []
}

const [state, dispatch] = useReducer(reducer, initialState);
```

combineReducersを導入する。
useReducerにrootReducerをわたす。
useReducerにわたすinitialStateを変更する。
initialState = {events: []};

[] → { events: [] }

この時点で生じたエラーを潰す。

<br />
<br />

# lesson25

branch: create-operational-reducer

操作ログ用のreducerを作成する

action.type用の定数を追加
ADD_OPERATION_LOG
DELETE_ALL_OPERATION_LOG

reducers/operationLogs.js
action.description, action.operatedAt

combineReducerにわたす。
initialStateにoperationLogs用の初期stateを追加する。
initialState = {events: [], operationLogs: []};

<br/>
<br/>

# lesson26

branch: iso8601

```console
touch src/utils.js
```

日時を返す関数timeCurrentIso8601を作る

ISO8601形式のメリット

- 他のサービスなどに送信する際に他の形式に変換せずそのまま送れる。

- タイムスタンプはだいたいISO8601形式。

参考https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOStri

<br/>
<br/>

# lesson27

branch: create-operationLogs

EventFormコンポーネントで、

追加済みのaction.typeの定数をインポート

日時を返す関数timeCurrentIso8601をインポート

操作ログ用のdispatch()を追加

イベント作成時と、全てのイベント削除時にログがのこるよう、それぞれdispatch関数を呼ぶ

ログはまだブラウザに表示されないがデベロッパーツールでstateを見ると、ログが残っていることが確認できる

<br/>
<br/>

# lesson28

branch: delete-all-operationLogs

全ての操作ログを削除するボタンを作成する
オンクリックイベントにdeleteAllOperationLogs()
その中でdispatch({type: DELETE_ALL_OPERATION_LOGS})
state.operationLogs===0のときdisabled

<br/>
<br/>

# lesson29

branch: create-operationLog-in-case-of-event-deletion

イベント削除時の操作ログを残す。

<br/>
<br/>

# lesson30

branch": display-all-operationLogs

操作ログ一覧をブラウザに表示する

Events,Eventsコンポーネントと同じ要領で。

OperationLogs
OperationLog

<br/>
<br/>

# lesson31

branch: なし

ローカルストレージについて

イベント一覧、操作ログ一覧をブラウザのローカルストレージに保存して永続化する

localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
localStorage.clear()


<br/>
<br/>

# lesson32

branch: save-state-with-localStorage

stateが変更されたらuseEffect内で保存処理をする
