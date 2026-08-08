function getToken() {
    return Promise.resolve("abc121");
}

async function run() {
    let token = await getToken();
    console.log(token);
}

run();