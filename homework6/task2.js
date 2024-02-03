function nameFun (num) {
    console.log (num);
    
    num = num-1
    if (num > 0) {
        nameFun (num)
    }
}

nameFun(5);