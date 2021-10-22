import logo from './logo.svg';
import './App.css';
import Wrap from './Wrap/Wrap';
import TabsButton from './TabsButton/TabsButton';

function App() {
  return (
    <div className="App">
       <Wrap>
          <TabsButton/>
       </Wrap>
    </div>
  );
}

export default App;
