function throtling(fn,delay){
    // console.log(parameters);
    let myId  = null;
    return function(...args){
        if(myId===null){
            fn(...args);
            myId = setTimeout(()=>{
                myId= null
            },1000*delay)
        }else{
            console.log(`Your code excute after ${delay}sec.`)
        }
    }
}

function add(a,b){
    console.log(a+b);
    return a+b
}

result = throtling(()=>{add(3,5)},10);
result(); //The function only run ones
result(); //This give message : "Your code excute after 10sec."
result();
result();

