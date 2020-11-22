import React, {useState} from 'react';

// const App = () => {
//   const initialStates = {
//     name: '',
//     price: 1000
//   }

//   const [name, setName] = useState(initialStates.name);
//   const [price, setPrice] = useState(initialStates.price);

//   return (
//     <>
//       <p>現在の{name}は、{price}円です</p>
//     </>
//   );
// }

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
    <>
      <p>現在の{name}は、{price}円です</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={(e) => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: 'sample',
  price: 1000
}

export default App;
