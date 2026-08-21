class TestDataStorage<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item)
    }
    getFirst(): T {
        return this.items[0]!
    }

    getAll(): T[] {
        return this.items
    }

    count(): number {
        return this.items.length
    }
}

let statusCodeStore = new TestDataStorage<number>
let testNameStore = new TestDataStorage<string>

statusCodeStore.add(200)
statusCodeStore.add(403)
statusCodeStore.add(404)

testNameStore.add("Login Page")
testNameStore.add("Admin Page")

console.log(statusCodeStore.getFirst())
console.log(statusCodeStore.getAll())
console.log(testNameStore.getAll())
console.log(testNameStore.count())
