future = Date.parse("Mon Oct 25 2021 16:30:00");
now = new Date();
diff = future - now;

console.log(hours = Math.floor(diff / (1000 _ 60 _ 60)));
console.log(mins = Math.floor(diff / (1000 \* 60)));
console.log(secs = Math.floor(diff / 1000));

console.log( h = hours);
console.log( m = mins - hours _ 60);
console.log( s = secs - mins _ 60);

    // console.log(days = Math.floor(mili / (1000 * 60 * 60 * 24)));
    // console.log(hours = Math.floor(mili / (1000 * 60 * 60)));
    // console.log(mins = Math.floor(mili / (1000 * 60)));
    // console.log(secs = Math.floor(mili / 1000));
    <!-- (new Date('Sun, 07 Nov 2021 22:20:45 +0300') - new Date('Sun, 07 Nov 2021 20:20:45 +0300')) / (1000 * 60 * 60) -->

    const listRef = useRef();

<List>
{arr.map(el => <Item key={el.id} ref={elRef => listRef.current.push(elRef)}
}
</List>
