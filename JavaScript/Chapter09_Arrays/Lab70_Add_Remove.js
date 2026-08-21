let status = ["pass", "fail", null, 'skip'];
console.log(status.at(3));
status.push("Hello");
status.push(3456);
console.log(status);

status.pop();
console.log(status);

status.shift();
console.log(status);
status.unshift(123);
console.log(status);

// splice (start,remove,..add items)
status.splice(1,0,"pass")

console.log(status)

status.splice(5, 1,123);
console.log(status)