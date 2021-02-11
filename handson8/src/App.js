import {useState} from 'react'
import './App.css';
import CurrencyConvertor from './Components/CurrencyConvertor'

function App() {
  const [count, setCount] = useState(0);
  const sayHello = (name) => {
    return(
          alert(`Hello! ${name}`));
  };
  const CustomButton = ({onPress}) => {
    return (
      <button type="button" onClick={onPress}>
        Click on me
      </button>
    );
  }
  const handleEvent = () => {
      alert("I was clicked");
    };
  
    
  return (
    <div style={{marginLeft:"50px"}}>
      <p>{count}</p>
      <button onClick={() =>{sayHello("Member1");setCount(count + 1)}}>Increment</button><br/>
      <button onClick={() => setCount(count - 1)}>Decrement</button><br/>
      <button value="welcome" onClick={(e) => alert(e.target.value)}>
      Say Welcome
      </button><br/>
      <CustomButton onPress={handleEvent} /><br/>
      <CurrencyConvertor/>
    </div>
  );

}

export default App;
