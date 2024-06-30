function speedDetector(speed) {
    if (speed <= 70) {
        return 'OK'
    }
    else {
        let demeritPoints = (speed - 70)/5;
        if (demeritPoints <=12) {
            return `Points: ${demeritPoints}`;
        }
        else {
            return `LICENSE SUSPENDED.`;
        }
    }
}
// console.log(speedDetector(60));
// console.log(speedDetector(70));
// console.log(speedDetector(80));
// console.log(speedDetector(181));