function divideAndConquerSum(a) {
  return divideAndConquerSumHelper(a, 0, a.length - 1);
}

function divideAndConquerSumHelper(a, low, high) {
  if (low > high) 
  {
  
      return 0;
  }

  if (low === high) {
      //console.log(`Array from ${low} to ${high} contains a single element: ${a[low]}`);
      return a[low];
  }

  var mid1 = Math.floor(low + (high - low) / 3);
  var mid2 = Math.floor(low + 2 * (high - low) / 3);


  var sum1 = divideAndConquerSumHelper(a, low, mid1);
  var sum2 = divideAndConquerSumHelper(a, mid1 + 1, mid2);
  var sum3 = divideAndConquerSumHelper(a, mid2 + 1, high);

  return sum1 + sum2 + sum3;
}
