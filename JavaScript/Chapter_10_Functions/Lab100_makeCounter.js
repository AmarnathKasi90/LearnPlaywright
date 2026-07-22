function makeCounter(start = 0) {
    count = start;
    console.log("Counter Started", count)
    return {
        increment() { count++ },
        decrement() { count-- },
        getCount(){ return count}
    }
}


let counter = makeCounter()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getCount(count))
counter.decrement()
counter.decrement()
counter.increment()
console.log(counter.getCount(count))
