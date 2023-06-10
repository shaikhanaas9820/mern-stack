function sum_of_1_to_upto(num)
{
  var sum_num = 0;
  for(i = 0; i<num; i++)
    {
      sum_num += i;
    }
  return sum_num;
}

var sum_of_num = sum_of_1_to_upto(1000000);
console.log(sum_of_num);
