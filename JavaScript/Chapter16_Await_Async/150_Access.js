function getToken() {
    return Promise.resolve("abc123");
}
function getUser(token) {
    return Promise.resolve({
        id: 1,
        name: "Amarnath",
        token: token
    });
}
// Promise Chaining
getToken()
    .then(token => getUser(token))
    .then(user => console.log(user));

// Async/Await
async function run() {
    const token = await getToken();
    const user = await getUser(token);
    console.log(user);
}

run();