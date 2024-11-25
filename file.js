let inc=document.getElementById("count-el");
// console.log(inc)
let count=0;
function increment(){
    count++;
    inc.textContent = count;
    console.log(count);
}

function save(){
    let previous=document.getElementById("save-el");
    previous.textContent +=count + ' - ';
    // console.log(previous)
    inc.textContent=0;
    count=0;
}

