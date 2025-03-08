function debounce(fn,delay){
    let myId;
    return function(...superman){
        clearTimeout(myId)
        myId = setTimeout(()=>{
            fn.apply(this,superman)
        },delay)
    }
}

function add(a,b){
    console.log(a+b);
    return a+b
}

let result = debounce(()=>add(5,5), 2000);
result();
result();
result();
result();

setTimeout(() => {
    result();
},3000);




