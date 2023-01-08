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
let isPercentage = false;

//number buttons
zero.addEventListener('click', function(){
    if(res.innerText === '0')
        res.innerText = 0;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '0', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 0;
    if(isCalculating === true)
        num2 += '0';
});
one.addEventListener('click', function(){
    if(res.innerText === '0')
        res.innerText = 1;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '1', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 1;
    if(isCalculating != 0)
        num2 += '1';
});
two.addEventListener('click', function(){
    if(res.innerText === '0')
        res.innerText = 2;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '2', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 2;
    if(isCalculating != 0)
        num2 += '2';
});
three.addEventListener('click', function(){
    if(res.innerText === '0')
         res.innerText = 3;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '3', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 3;
    if(isCalculating != 0)
        num2 += '3';
});
four.addEventListener('click', function(){
    if(res.innerText === '0')
         res.innerText = 4;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '4', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 4;
    if(isCalculating != 0)
        num2 += '4';
});
five.addEventListener('click', function(){
    if(res.innerText === '0')
        res.innerText = 5;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '5', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 5;
    if(isCalculating != 0)
        num2 += '5';
});
six.addEventListener('click', function(){
    if(res.innerText === '0')
        res.innerText = 6;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '6', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 6;
    if(isCalculating != 0)
        num2 += '6';
});
seven.addEventListener('click', function(){
    if(res.innerText === '0')
        res.innerText = 7;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '7', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 7;
    if(isCalculating != 0)
        num2 += '7';
});
eigth.addEventListener('click', function(){
    if(res.innerText === '0')
        res.innerText = 8;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '8', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 8;
    if(isCalculating != 0)
        num2 += '8';
});
nine.addEventListener('click', function(){
    if(res.innerText === '0')
        res.innerText = 9;
    else if(isCalculating === 5)
    {
        let sz = res.innerText.length - 1;
        res.innerText = [res.innerText.slice(0,sz), '9', res.innerText.slice(sz)].join('');
    }
    else
    res.innerText = res.innerText + 9;
    if(isCalculating != 0)
        num2 += '9';
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
    isPercentage = false;
    ans = 0;
    num1 = '';  
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
            ans = parseFloat(num1) * parseFloat(num2);
            break;
        case 2:
            ans = parseFloat(num1) + parseFloat(num2);
            break;
        case 3:
            ans = num1 / parseFloat(num2);
            break;
        case 4:
            ans = num1 - parseFloat(num2);
        case 5:
            ans = Math.sqrt(parseFloat(num2));
        default:
            break;
    }
    
    if(isCalculating === 0 && isPercentage == true)
        ans = num1;
    let isFloat = 0;
    if(Number.isInteger(ans) == false)
        isFloat = ans.toString().split('.')[1].length;
    if(Number.isInteger(ans) == false && isFloat >= 4){
        res.innerText = ans.toFixed(4);
        let zeros = 0;
        for(let i = res.innerText.length - 1;i>0;i--){
            if(res.innerText[i] == 0)
                zeros++;
            else
                break;

        }
        res.innerText = ans.toFixed(4 - zeros);
    }
    else
        res.innerText = ans;
    ans = 0;
    num1 = 0;
    num2 = '';
    isCalculating = 0;
    isPercentage = false;
});

// math operation buttons
mult.addEventListener('click', function(){
    if(isCalculating === 0 && isPercentage == false)
        num1 = res.innerText;
    if(isCalculating != 0){
        ans = num1 * num2;
        num1 = ans;
        num2 = '';
    }
    isLastOperation();
    res.innerText += '*';
    isCalculating = 1;
});

sum.addEventListener('click', function(){
    if(isCalculating === 0 && isPercentage == false){
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
});

div.addEventListener('click', function(){
    if(isCalculating === 0 && isPercentage == false){
        // num1Editing();
        num1 = res.innerText;
    }
    if(isCalculating != 0){
        ans = num1 / num2;
        num1 = ans;
        num2 = '';
    }
    isLastOperation();
    res.innerText += '/';
    isCalculating = 3;
});

sub.addEventListener('click', function(){
    if(isCalculating === 0 && isPercentage == false)
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
    if(res.innerText == '0')
        res.innerText = 'sqrt()';
    
    isCalculating = 5;
});

percentage.addEventListener('click', function(){
    isPercentage = true;
    if(isCalculating != 0)
        num2 = num2 / 100;
    else
        num1 = res.innerText / 100;
    res.innerText += '%';
});

function isLastOperation(){
    let lastChar = res.innerText.substring(res.innerText.length - 1, res.innerText.length);
    if(lastChar == '+' || lastChar == '*' || lastChar == ' /' || lastChar == '-'){
        res.innerText = res.innerText.substring(0, res.innerText.length - 1);    
    }
}

