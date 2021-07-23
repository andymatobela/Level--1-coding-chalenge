function multiples(number) {
    let sum = 0;
    for (let x = 0; x < number; x++) {
  
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
        }
      }
      console.log(sum);
    }
    multiples(1000)