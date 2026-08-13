class CAR {
    #engine;
    constructor(name, engine) {
        this.name = name;
        this.#engine = engine;
        console.log(`CAR ${this.name} is with ${this.#engine} Engine`)
    }

    getEngineVersion() {
        return this.#engine;
    }

    setEngineVersion(engine) {
        this.#engine = engine;

    }
}

let c1 = new CAR("tesla", "v8")
// console.log(c1.getEngineVersion())
c1.setEngineVersion("v9")
console.log(c1.getEngineVersion())