
teas = ["chai", "dshvfv", "jbdfgefgegf"]
longestTea = teas[0];

for(let i = 0;i<teas.length;i++){
    if(teas[i].length>longestTea.length){
        longestTea = teas[i];
    }
}

console.log(longestTea)