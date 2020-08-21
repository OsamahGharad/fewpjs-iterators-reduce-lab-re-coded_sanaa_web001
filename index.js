const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
totalBatteries =()=>{
  return batteryBatches.reduce((batteryBatch,totalBattery) =>  batteryBatch+totalBattery,10)}
console.log(totalBatteries())