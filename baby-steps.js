//TASK 2
    //let result = process.argv.map((i) => Number(i));
    //console.log(result.length);
    
    let count = 0;

    for (let i = 2; i < process.argv.length; i++) {
        
        count += +process.argv[i]
        
    }
    console.log(count);





