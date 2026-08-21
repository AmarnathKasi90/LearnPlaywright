
function runSuite(suitename, ...results) {
    return `${suitename} suit got statues ${results}`
}

console.log(runSuite("Regrestion", "pass", "fail", "skip"))