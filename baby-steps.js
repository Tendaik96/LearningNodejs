//TASK 2
    //let result = process.argv.map((i) => Number(i));
    //console.log(result.length);
    //command line for testing: node baby-steps.js
console.log(process.argv)
    
    let count = 0;

    // i = 2 because the string of number start art the 2nd index of the process.arg array
    for (let i = 2; i < process.argv.length; i++) {
        
        count += +process.argv[i]
        
    }
    console.log(count);





