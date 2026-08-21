let status = ["pass", "fail", "Skip"];
console.log(status[1]);
console.log(status.at(-1));
status[3] = "Blocked";
console.log(status);
console.log(status.at(-4));
console.log(status.at(3));