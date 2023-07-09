function right_traingle_pattern(num_of_rows)
{
    var return_pattern = '';
    for(i = 1; i <= num_of_rows; i++)
    {
        for(j = 0; j < num_of_rows-i; j++)
        {
            return_pattern += ' ';
        }
        for(k = 0; k < i; k++)
        {
            return_pattern += '*';
        }
        return_pattern += '\n';
    }
    return return_pattern;
}

var right_traingle_string = right_traingle_pattern(5);
console.log(right_traingle_string)