let env = {
    baseUrl: "https://www.app.vwo.com/login?retry=true",

    body: {
        user: {
            role: Admin,
            activeStatus: true
        }
    }


}

const Config = {
    url: "https://www.demoqa.com/alerts",
    testUser: {
        userName: "Admin",
        password: "Admin123"
    },

    logLevel: "INFO",

    retryCount: parseint(process.env.RETRY_COUNT || '3', 10)

}

