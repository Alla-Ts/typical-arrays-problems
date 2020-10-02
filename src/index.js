exports.min = function min(array) {

    if (array == null || array.length == 0) {
        return 0;
    }
    return Math.min.apply(null, array);
}


exports.max = function max(array) {

    if (array == null || array.length == 0) {
        return 0;
    }
    return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    if (array == null || array.length == 0) {
        return 0;
    }
    let sumNum = 0;
    for (let i = 0; i < array.length; i++) {
        sumNum += array[i]
    }
    return (sumNum / array.length);
}