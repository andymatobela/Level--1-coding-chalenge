function squarePrint(num){

    var hash = '#';

    for(x = 0; x < num; x++){
        for(y = 0; y < num; y++){
            console.log(hash);
        }
        console.log(hash +' ');
    }
}
squarePrint(4);