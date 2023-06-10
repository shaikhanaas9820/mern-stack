function generateFibonacciSeries(count)
{
  var fibonacci_element = [0,1];
  for(i = 2; i < count; i++)
  {
    var next_num = fibonacci_element[i-1] + fibonacci_element[i-2];
    fibonacci_element.push(next_num);
  }
  return fibonacci_element;
}

var fibonacciSeries = generateFibonacciSeries(10);
console.log(fibonacciSeries);