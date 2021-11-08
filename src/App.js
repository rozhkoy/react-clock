
import './App.css';
import Wrap from './Wrap/Wrap';
import TabsButton from './TabsButton/TabsButton';
import { useRef } from 'react';

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
