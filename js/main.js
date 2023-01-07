const res = document.getElementById('res');
const percentage = document.getElementById("percentage");
const sqrt = document.getElementById('sqrt');
const Clr = document.getElementById('Clr');
const del = document.getElementById('delete');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eigth = document.getElementById('eigth');
const nine = document.getElementById('nine');
const sum = document.getElementById('sum');
const sub = document.getElementById('sub');
const mult = document.getElementById('mult');
const div = document.getElementById('div');
const dot = document.getElementById('dot');
const eql = document.getElementById('eql');
let num1 = 0;
let num2 = '';
let ans = 0;
let isCalculating = 0;
//number buttons
zero.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 0;
    else
    res.innerText = res.innerText + 0;
    if(isCalculating === true)
        num2 += 0;
});
one.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 1;
    else
    res.innerText = res.innerText + 1;
    if(isCalculating != 0)
        num2 += 0;
});
two.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 2;
    else
    res.innerText = res.innerText + 2;
    if(isCalculating != 0)
        num2 += 2;
});
three.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 3;
    else
    res.innerText = res.innerText + 3;
    if(isCalculating != 0)
        num2 += 3;
});
four.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 4;
    else
    res.innerText = res.innerText + 4;
    if(isCalculating != 0)
        num2 += 4;
});
five.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 5;
    else
    res.innerText = res.innerText + 5;
    if(isCalculating != 0)
        num2 += 5;
});
six.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 6;
    else
    res.innerText = res.innerText + 6;
    if(isCalculating != 0)
        num2 += 6;
});
seven.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 7;
    else
    res.innerText = res.innerText + 7;
    if(isCalculating != 0)
        num2 += 7;
});
eigth.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 8;
    else
    res.innerText = res.innerText + 8;
    if(isCalculating != 0)
        num2 += 8;
});
nine.addEventListener('click', function(){
    if(res.innerText === '0')
     res.innerText = 9;
    else
    res.innerText = res.innerText + 9;
    if(isCalculating != 0)
        num2 += 9;
});

dot.addEventListener('click', function(){
    res.innerText = res.innerText + '.';
    if(isCalculating != 0)
        num2 += '.';
});


//operation buttons

// leftB.addEventListener('click', function(){
//     res.innerText = res.innerText + '(';
// });

// rigthB.addEventListener('click', function(){
//     res.innerText = res.innerText + ')';
// });

Clr.addEventListener('click', function(){
    res.innerText = 0;
    isCalculating = 0;
    ans = 0;
    num1 = 0;
    num2 = 0;
});

del.addEventListener('click', function(){
    if(res.innerText.length === 1)
        res.innerText = 0;
    else
    res.innerText = res.innerText.substring(0, res.innerText.length - 1);    
});

eql.addEventListener('click', function(){
    switch (isCalculating){
        case 1:
            ans = num1 * parseFloat(num2);
            break;
        case 2:
            ans = parseFloat(num1) + parseFloat(num2);
            break;
        case 3:
            ans = num1 / parseFloat(num2);
            break;
        case 4:
            ans = num1 - parseFloat(num2);
        default:
            break;
    }
    console.log(num1);
    console.log(num2);
    console.log(ans);
    res.innerText = ans;
    ans = 0;
    num1 = 0;
    num2 = '';
    isCalculating = 0;
    
});


// math operation buttons
mult.addEventListener('click', function(){
    if(isCalculating === 0)
        num1 = res.innerText;
    else{
        ans = num1 * num2;
        num1 = ans;
        num2 = '';
    }
    isLastOperation();
    res.innerText += '*';
    isCalculating = 1;
});

sum.addEventListener('click', function(){
    if(isCalculating === 0){
        // num1Editing(num1);
        num1 = res.innerText;
    }
    else{
        ans = parseFloat(num1) + parseFloat(num2);
        num1 = ans;
        num2 = '';
    }
    isLastOperation();
    res.innerText += '+';
    isCalculating = 2;
    console.log(typeof(num1));
    console.log(num2);
    console.log(ans);
});

div.addEventListener('click', function(){
    if(isCalculating === 0){
        // num1Editing();
        num1 = res.innerText;
    }
    else{
        ans = num1 / num2;
        num1 = ans;
        num2 = '';
    }
    isLastOperation();
    res.innerText += '/';
    isCalculating = 3;
    console.log(num1);
    console.log(num2);
    console.log(ans);
});

sub.addEventListener('click', function(){
    if(isCalculating === 0)
        num1 = res.innerText;
    else{
        ans = num1 - parseFloat(num2);
        num1 = ans;
        num2 = '';
    }
    isLastOperation();
    res.innerText += '-';
    isCalculating = 4;
});

sqrt.addEventListener('click',function(){
    if(isCalculating === 0)
        num1 = res.innerText;
    else{
        ans = num1 - parseFloat(num2);
        num1 = ans;
        num2 = '';
    }
})

function isLastOperation(){
    let lastChar = res.innerText.substring(res.innerText.length - 1, res.innerText.length);
    if(lastChar == '+' || lastChar == '*' || lastChar == ' /' || lastChar == '-'){
        res.innerText = res.innerText.substring(0, res.innerText.length - 1);    
    }
}

// function num1Editing(s){
//     let lastChar = s.substring(s.length - 1, s.length);
//     if(lastChar == '+' || lastChar == '*' || lastChar == ' /' || lastChar == '-'){
//         num1 = s.substring(0, num1.length - 1);    
//     }
// }



document.addEventListener('Digit0', function(event){
  res.innerText += event.key;
});

// function checkPhoneKey(key) {
//     return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
//   }

//   res.innerText += return checkPhoneKey(event.key)