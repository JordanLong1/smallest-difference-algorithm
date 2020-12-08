function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a-b ); 
     arrayTwo = arrayTwo.sort((a, b) => a-b ); 
   
   
     let left = 0; 
   let right = 0;
     let smallest = Infinity
     let current = Infinity; 
     let smallestPair = []
   
   
 
     while (left< arrayOne.length && right < arrayTwo.length) {
     let firstNum = arrayOne[left]; 
       let secondNum = arrayTwo[right]; 
       if (firstNum < secondNum) {
         current = secondNum - firstNum; 
         left++
       } else if (secondNum < firstNum) {
         current = firstNum - secondNum
         right++
       } else {
         return [firstNum, secondNum]
       }
       
       if (smallest > current) {
         smallest = current; 
         smallestPair = [firstNum, secondNum]
       }
       
     }
       
     return smallestPair
 
 }