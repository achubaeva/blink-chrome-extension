// function leftPad(number, targetLength) 
// {
//     var output = number + '';
//     while (output.length < targetLength) 
//     {
//         output = '0' + output;
//     }
//     return output;
// }

// function storeMainSecond(number) {
//     let newNumber = leftPad(number, 2);
//     chrome.storage.sync.set({'mainSecond': newNumber }, function() {
//     console.log('Value is set to ' + newNumber );
//   })
// };

// //let mainSeconds = 0;
// storeMainSecond(0);
// let mainMinutes = 0;

// //let updateTimer = document.getElementById('timer');

// mainSecond = 0;
// storeMainSecond(mainSecond);

// function timer(){
//     let m = leftPad(mainMinutes, 2);
//     // let s = leftPad(mainSeconds, 2);

//     mainSecond++;
//     storeMainSecond(mainSecond++);

//     // updateTimer.innerHTML = m + ":" + s;
    
//     if (mainSecond > 60) 
//     {
//         mainSecond = 0;
//         mainMinutes ++;   
//     }

// }

// // function clickTimer() {
// //     startTimer = setInterval(timer, 5000);
// // }

// var startTimer = setInterval(timer, 1000);
