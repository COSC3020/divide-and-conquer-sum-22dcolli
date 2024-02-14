// Recieved help from the Replit Ai tool in addition to the code below found on GeeksforGeeks(as a starting reference)

function divideAndConquerSum(a) 
{
    //initial high and low
    return helperFunc(a,0,a.length-1);
}

function helperFunc(a,low,high)
{
    if (low > high)
    {
        return 0;
    }

    if (low == high)
    {
        return a[low];
    }

    let divA = Math.floor(low + (high-low)/3);
    let divB = Math.floor((low+2*(high-low))/3)

    return helperFunc(a,low,divA) + helperFunc(a,(divA+1),divB) + helperFunc(a,(divB+1),high); 
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
