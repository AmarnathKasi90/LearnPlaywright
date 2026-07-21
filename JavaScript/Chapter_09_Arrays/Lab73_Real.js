let browsers = new Array(3);
browsers[0] = "Chrome";
browsers[1] = "Firefox";
browsers[2] = "Webkit";
browsers[4] = "Opera";

console.log(browsers);
browsers[5] = "safari";


for (let i = 0; i < browsers.length; i++){
    console.log(browsers[i]);
    if (browsers[i] === null) {
        console.log("null is not valid")
    }
    if (browsers[i] === undefined) {
        console.log("undefined is valid")
    }
    if (browsers[i] === "safari") {
        console.log("safari is available")
    }

    

}