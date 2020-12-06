function smallestDifference(arrayOne, arrayTwo) {
 
    arrayOne = arrayOne.sort((a, b) => a-b ); 
    arrayTwo = arrayTwo.sort((a, b) => a-b ); 

    let smallest = Infinity; 
		
    let left = 0; 

    let right = 0; 

    while (left < arrayOne.length && right < arrayTwo.length) {
    
    if (arrayOne[left] < arrayTwo[right]) {
		left++; 
     smallest = [arrayOne[left], arrayTwo[right]]; 
    
    } else if (arrayOne[left] > arrayTwo[right]) {
      right++; 
    } 
	  smallest = [arrayOne[left], arrayTwo[right]]; 
		left++; 
		
    }
    return smallest; 

}
