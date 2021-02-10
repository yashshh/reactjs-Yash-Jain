import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div style={{position:"absolute",left:"300px",padding:"20px",color:"blue"}}>
        <Home></Home>
        <About></About>
        <Contact></Contact>
    </div>
  );
}

export default App;
