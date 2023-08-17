function swap (arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function separate(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i<=j){
        if (arr [i]==1){
            // till this [pint i and j have not passed from each other]
            swap(arr,i,j);
            j--;
        } else {
            i++;
        }
    }
}
let arr = [1,1,1,0,1,0,0,0,1,0,1];
separate (arr);
console.log(arr);