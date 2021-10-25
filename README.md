future = Date.parse("Mon Oct 25 2021 16:30:00");
 now = new Date();
 diff = future - now;


 console.log(hours = Math.floor(diff / (1000 * 60 * 60)));
 console.log(mins = Math.floor(diff / (1000 * 60)));
 console.log(secs = Math.floor(diff / 1000)); 

console.log( h = hours);
console.log( m = mins - hours * 60);
console.log( s = secs - mins * 60); 




    // console.log(days = Math.floor(mili / (1000 * 60 * 60 * 24)));
    // console.log(hours = Math.floor(mili / (1000 * 60 * 60)));
    // console.log(mins = Math.floor(mili / (1000 * 60)));
    // console.log(secs = Math.floor(mili / 1000)); 