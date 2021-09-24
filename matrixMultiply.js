//matrix multiplication

matrix1 = [
    [1,  2,  3, 13],
    [4,  5,  6, 14],
    [7,  8,  9, 15],
    [10, 11, 12,16],
]

matrix2 = [
    [1,  2,  3, 13],
    [4,  5,  6, 14],
    [7,  8,  9, 15],
    [10, 11, 12,16],
]

matrix3 = [
    [1,  2,  3, 13],
    [4,  5,  6, 14],
    [7,  8,  9, 15],
    [10, 11, 12,16],
]

matrix4 = [
    [1,  2,  3, 13],
    [4,  5,  6, 14],
    [7,  8,  9, 15],
    [10, 11, 12,16],
]

matrix5 = [
    [15],
    [20],
    [30],
    [1],
]



function matrixMultiply(matrixA,  matrixB){
    //only do the calculation if both matricies have the same number of rows
    if(matrixA[0].length == matrixB.length){
        //clear matrixC
        matrixC = [];
        //loop through every column in every row and multiply themall together neatly
        for(r = 0; r < matrixA.length; r++){
                matrixC[r] = [] //initiate matrixC[r] so we can write to it
            for(c = 0; c < matrixB[0].length; c++){
                value = 0; //reset value to 0
                for(i = 0; i < matrixA[0].length; i++){ //cycle through columns of matrixA or rows of matrixB (they are always the same)
                    value += (matrixA[r][i] * matrixB[i][c])    //multiply the values together
                }
                matrixC[r][c] =  value; //store the final result in matrix[r][c]
            };
        };
        return matrixC ;
};


console.log(matrixMultiply(matrixMultiply(matrixMultiply(matrixMultiply(matrix1, matrix2), matrix3), matrix4), matrix5));
