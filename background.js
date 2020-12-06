function leftPad(number, targetLength) 
{
    var output = number + '';
    while (output.length < targetLength) 
    {
        output = '0' + output;
    }
    return output;
}

function storeMainSecond(number) {
    let newSecond = leftPad(number, 2);
    chrome.storage.sync.set({'mainSecond': newSecond }, function() {
    console.log('Value is set to ' + newSecond );
  })
};

function storeMainMinute(number) {
    let newMinute= leftPad(number, 2);
    chrome.storage.sync.set({'mainMinute': newMinute }, function() {
    console.log('Value is set to ' + newMinute );
  })
};

// storeMainSecond(0);
// storeMainMinute(0);


let mainSecond = 0;
let mainMinute = 0;
storeMainSecond(mainSecond);
storeMainMinute(mainMinute);

function timer(){

    

    if (mainSecond === 60) {
        mainSecond = 0;
        mainMinute++
        storeMainMinute(mainMinute);
        
    }

    storeMainSecond(mainSecond++);

}

var startTimer = setInterval(timer, 1000);

