 /*
	sort both arrays in ascending order
	
	compare x3 to y5, if x3 === y5 then thats the pair we want to return.
	
	x3 < y5? compute their difference and store it 
	
	then we want to generate a new pair of numbers. 
	
	since x3 is smaller than y5, we know the numbers before x3 would indeed be smaller 
	so we can eliminate the numbers before x3.
	
	all of the numbers after y5 would also be greater so we can eliminate the numbers after y5
	
	so we either decremeent y5, or increzment x3
	
	pointer at beginning of array one and array 2 
	
	ex: arr1 = [1, 2, 3] arr2 = [2, 3, 4] pointer1 + pointer2
	
	compute difference, store it. 
	
	then we can say pointer 1 is less than pointer 2. move pointer 1 up one.
	
	then we say is 2nd number less than or greater than? still less than increment left
	
	when we get to a point where the left pointer is greater than right, 
	compute difference, move right pointer up one
	
	compute difference, store placeholder var
	
	left pointer still greater than right? move right pointer up again
	update difference 
	
	when we get to a point where right pointer is greater, move left pointer up again
	
	when we get to end of both arrays, we call it quits. 
	
	
	we return indeces example: [28, 26]
	
	
    think we take the highest num out of the comparison and subtract it with the lower to get absolute difference. 
	
	
	*/
	