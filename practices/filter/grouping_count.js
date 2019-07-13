'use strict';
const callback=(a,c,i)=>{
  if(Object.getOwnPropertyNames(a).length==0)
  a[c]=1;
  else{
    let flag=0;
    for(let att in a){
      if(c==att){
		    a[att]++;
        flag=1;
        break;
      }
    }
    if(flag==0)
    a[c]=1;
  }
  return a;
}
function grouping_count(collection) {

  //implement here
  return collection.reduce(callback,{});
}

module.exports = grouping_count;
