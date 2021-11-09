
import './App.css';
import Wrap from './Wrap/Wrap';
import TabsButton from './TabsButton/TabsButton';
import { createContext, useEffect, useRef, useState } from 'react';

export const countryListObject = createContext([])

function App() {
  const countryList = useRef([])    
  const [stateApi , setStateApi] = useState(false);
  useEffect(() =>{
      if(stateApi == false){
          fetch('https://restcountries.com/v2/all')
              .then(response => response.json())
              .then(commits => {
                  for(let i = 0; i < commits.length; i++){
                  countryList.current[i] = {}
                      
                  countryList.current[i].index = i;
                  countryList.current[i].name = commits[i].name;
                      if('capital' in commits[i]){
                          countryList.current[i].capital = commits[i].capital;
                      }else{
                          countryList.current[i].capital = commits[i].name;
                      }
                      countryList.current[i].region = commits[i].region;

                  }
                  console.log(countryList.current);
              })
              setStateApi(true)
      }
  })
  return (
    <div className="App">
      <countryListObject.Provider value={countryList.current}>
       <Wrap>
          <TabsButton/>
       </Wrap>
      </countryListObject.Provider>
    </div>
  );
}

export default App;
