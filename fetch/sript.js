 
    let capitale;
    let array = []
    var DateTime = luxon.DateTime;
    let dateTime = DateTime.local();
 function go(){
    console.time();
   fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(commits => {
         for(let i = 0;i < commits.length; i++){
            array[i] = {}
            
               array[i].index = i;
               array[i].name = commits[i].name;
               if('capital' in commits[i]){
                  array[i].capital = commits[i].capital;
               }else{
                  array[i].capital = commits[i].name;
               }
               array[i].latlng = commits[i].latlng;
               array[i].region = commits[i].region;

         }
         // for(let g = 0; j < array.length; j++){
         //    let addres = '';
         //    let region = '';
         //    let cap = ''
         //    region = array[g].

         //    dateTime = dateTime.setZone("America/La_Paz");
         //    console.log("Custom date, America/La_Paz", dateTime.toISO());
         // }

         console.log(array);
      })
      .then(() =>{
         console.log(array);
         
         // for(let j = 0; j < 10; j++ ){
         //    fetch(`https://api.ipgeolocation.io/timezone?apiKey=1951161faacc41268be75b771f166a97&lat=${array[j].latlng[0]}&long=${array[j].latlng[1]}`)
         //       .then(response => response.json())
         //       .then(commits => console.log(this.commits))
         // }
      })
   console.timeEnd()

   
 }
   


 function search(word){
    console.time()
   let arraySimilarWord = []
   regex = new RegExp((`^${word}`), 'i','m');

   for(let k = 0; k < array.length; k++){
      if(array[k].capital.match(regex)){
         console.log(array[k].capital.match(regex));
          arraySimilarWord.push(array[k].capital)
      }
   }
   
   console.log(arraySimilarWord);
   console.timeEnd();
 }


 go()


 