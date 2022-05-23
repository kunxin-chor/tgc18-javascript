let a = [1,2,3,4]; 
function getPrime(){
    return [1,3,7,11];
}
function findLargestNumber(a) {
    let largest = a[0];
    for(let n of a) {
        if (n > largest){
            largest = n;
        }
    }
    return largest;
}
findLargestNumber([10, 20, -100, 50, 500, 40]);