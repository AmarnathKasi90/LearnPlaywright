let testScore = -23;
switch (true) {
    case (testScore > 100): console.log("Check the Input Properly"); break;
    case (testScore >= 96): console.log("Excellent"); break;
    case (testScore >= 75): console.log("Great"); break;
    case (testScore >= 40): console.log("good"); break;
    case (testScore >= 1): console.log("Perform Better Next Time"); break;
    case (testScore < 0): console.log("Wrong Input"); break;
    default: console.log("Invalid input");    
    
    
}