let map = new Map;

map.set('one',1)
map.set('eight',8)
map.set('two',2)

let sorted = [...map].sort((a,b) => a[1]- b[1]);
for(let kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]}`)
}