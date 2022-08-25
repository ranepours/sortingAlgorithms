const bubbleSort = (arr) => {
    const swap = (arr, id1, id2) => {
        [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
    };
    for (let i = arr.length; i > 0; i--){
        for(let j = 0; j < i -1; j++){
            if (arr[j] > arr[j +1]){
                swap(arr, j, j +1);
            }
        }
    }
    return arr;
}

const merge = (arr1, arr2) => {
    let res = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if (arr2[j] > arr1[i]){
            res.push(arr1[i]);
            i++
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length){
        res.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        res.push(arr2[j]);
        j++;
    }   return res;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const insertion = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let currentValue = arr[i];
        for (var j = i - 1; j > -1 && arr[j] > currentValue; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }   return arr;
}

const selection = (arr) => {
    const swap = (arr, idx1, idx2) => {
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    }

    for (let i = 0; i < arr.length; i++){
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++){
        if (arr[lowest] > arr[j]) {
            lowest = j;
        }
    }
    if (i !== lowest) swap(arr, i, lowest);
    }   return arr;   
}