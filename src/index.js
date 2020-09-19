
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let resultArr = [];

    for (let i = 0; i < matrix.length; i++) {
        if (Array.isArray(matrix[i])) {
            if (i % 2 !== 0) {
                resultArr.push(matrix[i].reverse());
            } else {
                resultArr.push(matrix[i]);
            }
        }
    }
    return resultArr.flat();
};
