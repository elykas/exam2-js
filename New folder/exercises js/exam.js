const Mission1 = (arr) =>{
  return    arr.filter(n => n%2 === 0)
}


const Mission2 = (str) => {
    const toarr = str.split(" ")
    const newarr = toarr.filter(a => a.length === 4)
    return newarr.length
}

const Mission3 = (arr2) => {
    return arr2.flat();
}


function Mission4(arr3) {
    if (arr3.length < 2) {
        return 0; 
    }

    let Asc = true;
    let Des = true;

    for (let i = 1; i < arr3.length; i++) {
        if (arr3[i] > arr3[i - 1]) {
            Des = false;
        } else if (arr3[i] < arr3[i - 1]) {
            Asc = false;
        }
    }

    if (Asc) {
        return 1;
    } else if (Des) {
        return -1;
    } else {
        return 0;
    }

}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}



