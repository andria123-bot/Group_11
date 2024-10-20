const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(number => number % 2 === 0);

const manualFilter = (arr, func) => {
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }

    return result;
}