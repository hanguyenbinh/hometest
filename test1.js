function isCorrectMatrix(matrix) {
    if (!matrix) {
        return { code: 1, message: "matrix is null" }
    }
    else if (matrix.length <= 0) {
        return { code: 2, message: "matrix row = 0" }
    }
    else if (!matrix[0] || matrix[0].length <= 0) {
        return { code: 3, message: "row 0 is incorrect" }
    }
    let nColumn = matrix[0].length;
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i].length != nColumn) return { code: 3, message: `row ${i} is incorrect` }
    }
    return { code: 0 };
}
//because the requirement is only 90 degrees clockwise, so the matrix should have only 2 transposition
//if K % 2 = 0: no transpostion is apply
//else : transpos the matrix 90 degrees
///method 1: not really transpos the matrix, the output base on raw matrix
//complexity printMatrix: O(n(n+1)) memory used: dynamic: n +3 fixed: n + 1

class Matrix {
    constructor(matrixArray) {
        if (isCorrectMatrix(matrixArray).code == 0) {
            this.rawMatrix = matrixArray
            K = 0
        }
        else throw Error("wrong matrix input")
    }
    printMatrix(K) {        
        if (K % 2 == 0) {
            console.log("[")
            for (let i = 0; i < this.rawMatrix.length; i++) {
                console.log(this.rawMatrix[i])
            }
            console.log("]")
        }
        else {
            console.log("[")
            for (let i = 0; i < this.rawMatrix[0].length; i++) {
                var temp = []
                for (let j = 0; j < this.rawMatrix.length; j++) {
                    temp.push(this.rawMatrix[j][i])
                }
                console.log(temp)
            }
            console.log("]")
        }
    }
}
const test = new Matrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])
test.printMatrix(2)

//method 2 copy from stackoverflow
//complexcity: O(n(n+1)) memory used: 3n + 2
function transpose(matrix, K) {
    if (K %2 == 1){
        const rows = matrix.length, cols = matrix[0].length;
        const grid = [];
        for (let j = 0; j < cols; j++) {
            grid[j] = Array(rows);
        }
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[j][i] = matrix[i][j];
            }
        }
        return grid;
    }
    else return matrix
    
}

const result = transpose([[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
[13,14,15,16]])

console.log(result)