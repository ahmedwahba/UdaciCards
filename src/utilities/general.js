const  shuffle = (array) => {
    let newArray = [];
    newArray = array; 
    let index = newArray.length -1;
    let tempValue, randomIndex;
  
    while (index !== 0) {

      randomIndex = Math.floor(Math.random() * index);
      tempValue = newArray[index];
      newArray[index] = newArray[randomIndex];
      newArray[randomIndex] = tempValue;

      index--;
    }
  
    return newArray;
}

export {
    shuffle,
}
  
  