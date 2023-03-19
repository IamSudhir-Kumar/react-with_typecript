import logo from './logo.svg';
import './App.css';
import Prop from './Prop';
import PropswithClass from './PropswithClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Prop text= {{name:'Adam'}} data="New Profile"/>
        <PropswithClass name='Zeus' data= "Old Classic" />
      </header>
    </div>
  );
}

export default App;
