// Recieved help from the Replit Ai tool in addition to the code below found on GeeksforGeeks(as a starting reference)
function divideAndConquerSum(a) 
{
  //initial low and high
  return divideAndConquerSumHelper(a, 0, a.length - 1);
}

function divideAndConquerSumHelper(a, low, high) 
{
  if (low > high) 
  {
      return 0;
  }

  if (low === high) 
  {
      //console.log(`Array from ${low} to ${high} contains a single element: ${a[low]}`);
      return a[low];
  }

  var mid1 = Math.floor(low + (high - low) / 3);
  var mid2 = Math.floor(low + 2 * (high - low) / 3);

  //had to make sure it went into 3 and not 2
  var sum1 = divideAndConquerSumHelper(a, low, mid1);
  var sum2 = divideAndConquerSumHelper(a, mid1 + 1, mid2);
  var sum3 = divideAndConquerSumHelper(a, mid2 + 1, high);

  return sum1 + sum2 + sum3;
}
//let a = [1, 5, -1, 4];
//console.log(divideAndConquerSum(a));


// Below is the traditional mergesort I found on GeeksforGeeks, used as reference
/*
function devideAndConquerSum(a){
    // if array is empty    
    if(a.length==0)
        return 0;
    // if array has only 1 element
    if(a.length==1)
        return a[0];
    // find mid of array
    var mid = Math.floor(a.length/2);
    // reccursively compute sum
    return devideAndConquerSum(a.slice(0,mid))+devideAndConquerSum(a.slice(mid));
}
*/
