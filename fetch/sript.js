 
    let capitale;
    let continent;
    let array = []

 function go(){
   fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(commits => {
         for(let i = 0;i < commits.length; i++){
            array[i] = {}
            if('capital' in commits[i]){
               array[i].capital = commits[i].capital[0];
               array[i].common = commits[i].name.common;
               array[i].region = commits[i].region;

            }

         }
         console.log(array);
      })

   
 }
 go()
 