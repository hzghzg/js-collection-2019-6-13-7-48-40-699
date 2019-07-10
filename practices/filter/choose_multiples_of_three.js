'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  /*const condition=()=>{
    return  this[i]%3==0;
  }*/
  return collection.filter((item)=>item%3==0);
}

module.exports = choose_multiples_of_three;
