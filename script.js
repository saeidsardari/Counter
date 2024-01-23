var count = 0;
var countInterval;

function start(){
countInterval = setInterval(function(){
    count+=1;
    document.getElementById('counter').innerHTML=count;
    document.getElementsByClassName('start')[0].disabled=true;
    document.getElementsByClassName('pause')[0].disabled=false;
},1000);
}

function pause(){
    clearInterval(countInterval);
    document.getElementsByClassName('start')[0].disabled=false;
    document.getElementsByClassName('pause')[0].disabled=true;
}