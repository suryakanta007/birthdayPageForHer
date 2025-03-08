// console.log(Math.floor(Math.random()*7));


// let arr = [3,4,5,6,7,8]
// arr.reduce((acc,item)=>(
    
//     if(arr[acc]>item.acctivityCount){
//         acc = item.acctivityCount
//     }
// ))


let movieRatings = [
    {title:"Movie1",ratings : [4,5,6]},
    {title:"Movie1",ratings : [4,8,9]},
    {title:"Movie1",ratings : [4,5,6]}
]


let avgRatings = movieRatings.map((movie)=>{
    let avrage = (movie.ratings.reduce((acc,star)=>acc+star,0))/movie.ratings.length;

    return {title:movie.title , avrageRatings : avrage.toFixed(2)}

})

console.log(avgRatings);