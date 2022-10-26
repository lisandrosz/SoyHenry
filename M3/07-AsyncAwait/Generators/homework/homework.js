function* fizzBuzzGenerator(max) {
  let num = 1;
  while (true) {
    if (max) {
      if (num > max) {
        return;
      }
    }
    if (num % 5 === 0 && num % 3 === 0) {
      yield "Fizz Buzz";
      num++;
    } else if (num % 5 === 0) {
      yield "Buzz";
      num++;
    } else if (num % 3 === 0) {
      yield "Fizz";
      num++;
    } else {
      yield num;
      num++;
    }
  }
}

module.exports = fizzBuzzGenerator;
