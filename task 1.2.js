function test(x, y){

    var sum = x + y;
    var checeker = toString(sum);
    if ( x === 3 || y === 3 || sum === 3){
        if (sum.indexOf("3")){
            return false;
        }
        return false;
    }
    else {
        return true;
    }
    test(1,2);
}
