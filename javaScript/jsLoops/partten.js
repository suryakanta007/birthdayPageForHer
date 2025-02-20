function invertedMountain(n) {
    for(let i = n;i>=1;i--){
      let str = ""
      for(let j = 1;j<=i;j++){
        str += "*"
      }
      console.log(str)
    }
  }

invertedMountain(4)