 
    let capitale;
    let array = []

 function go(){
   fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(commits => {
         for(let i = 0;i < commits.length; i++){
            array[i] = {}
            
               array[i].index = i;
               array[i].name = commits[i].name;
               if('capital' in commits[i]){
                  array[i].capital = commits[i].capital;
               }
               array[i].latlng = commits[i].latlng;
            

         }
         console.log(array);
      })
      .then(() =>{
         console.log(array);
         for(let j = 0; j < 10; j++ ){
            fetch(`https://api.ipgeolocation.io/timezone?apiKey=1951161faacc41268be75b771f166a97&lat=${array[j].latlng[0]}&long=${array[j].latlng[1]}`)
               .then(response => response.json())
               .then(commits => console.log(commits))
         }
      })

   
 }
 go()
 