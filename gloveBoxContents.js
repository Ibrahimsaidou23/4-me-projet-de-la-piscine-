function loccol (mystorage) {
  return mystorage.car.inside["glove box"]

}

const myStorage = {     car: {         inside: { 
            'glove box': 'maps', 
            'passenger seat': 'crumbs', 
        },         outside: {             trunk: 'jack', 
        }, 
    }, 
};  
  const gloveBoxContents = loccol 
  console.log(gloveBoxContents(myStorage));