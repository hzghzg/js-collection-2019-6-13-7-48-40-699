'use strict';

function choose_even(collection) {
  //implement here
 /* const condition=()=>{
    return  this[i]%2==0;
  }*/
  return collection.filter((item)=>item%2==0);
}

module.exports = choose_even;
