function distributeGifts(totalGifts, friends) {
    // write your code here
    let count = 0;
    let remGifts ;
    for (let i = 1;i<=friends;i++){
      if(count>=totalGifts){
        remGifts = totalGifts-count
        console.log(remGifts)
        // console.log("meh aa rahaahu.")
        return count
      }
      count++ //1,2,3,4,5
    }
    remGifts = totalGifts-count
    console.log(remGifts);
    return count
  }

console.log(distributeGifts(10,5))