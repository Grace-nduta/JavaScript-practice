function speedDetector(){
    const speed=parseFloat(prompt("Enter the speed of the car in (km/h)"))
}const speedLimit=70
let demeritPoints=0

if (speed>speedLimit){
    demeritPoints=Math.floor((speed-speedlimit)/5)
    console.log(`points:{demeritPoints}`)

    if (demeritPoints>12){
        console.log("licence suspended")
    }
    else{
        console.log("Ok")
    }
}
speedDetector()