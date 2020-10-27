
// Binary search require a sorted array so we are using a sorted array
const array = [0,1,2,4,6,7,9,10,15,22]

var element = 4

var index = -1

// Calling function for binary search
index = binarySearch(array,element)

// Checking element is present or not
checkElement(index)

element = 5

// Calling function for binary search
index = binarySearch(array,element)

// Checking element is present or not
checkElement(index)

function binarySearch(array, element) { 
   
    let start=0, end=array.length-1; 
          
    // Iterate while start not meets end 
    while (start<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 
   
        // If element is present at mid, return True 
        if (array[mid] == element) 
        return mid; 
  
        // Else look in left or right half accordingly 
        else if (array[mid] < element)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
    return -1
} 

function checkElement(index){

    // If index is -1 element is not present in array
    if(index == -1){

        console.log("Element not found")
    
    // If index is not -1 then index is logged
    }else{
        
        console.log("Element found at index "+ index);
    
    }
}
