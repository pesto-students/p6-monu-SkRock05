function memoize(fn){
    const cache = new Map();
    console.log(cache);
    return function(...args){
        const key = args?.toString();
        if(args.length < 2){
            console.log('Call with single argument');
            return args[0];
        }
        if(cache.has(key)){
            console.log('Retriving the stored computed value for same call');
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        console.log('Call for the first time')
        return cache.get(key);
    }
}

//Given reducer method:
function add(a, b) {
    return a + b;
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);

//then calling...


console.log(memoizeAdd(100, 100));  //returns 200
console.log(memoizeAdd(100));  //returns 100
console.log(memoizeAdd(100, 200));  //returns 300
console.log(memoizeAdd(100, 100));  //returns 200 without computing