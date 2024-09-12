
function Mission1(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}



function Mission2(str) {
   
    const words = str.split(' ');
  
    const fourLetter = words.filter(word => word.length === 4);

    return fourLetter.length;
}





function Mission3(twomArray) {
   
    return twomArray.reduce((a, curr) => a.concat(curr), []);
}


const twoDimArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];





function Mission4(arr) {
    let isAs = true;
    let isDes = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            isDes = false;
        } else if (arr[i] < arr[i - 1]) {
            isAs = false;
        }
    }

    if (isAs) {
        return 1; 
    } else if (isDes) {
        return 2; 
    } else {
        return 0; 
    }
}






module.export = {
    Mission1,
    Mission2,
    Mission3,
    Mission4  
}