
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
				console.log(commits)
				let i = 0;
				let obj = {} 
				while(i < commits.length){
					obj = {
						index: i,
						name: commits[i].name,
						capital: commits[i].capital,
						latlng: commits[i].latlng,
					}

					if('capital' in commits[i] && 'latlng' in commits[i] && 'name' in commits[i]){
						countryList.current.push(obj)	
					}
					i++;
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
