function square_pattern(num_of_rows)
{
    var return_string = '';
    for(i = 0; i < num_of_rows; i++)
    {
        for(j = 0 ; j <= num_of_rows ; j++)
        {
            return_string += '*';
        }
        return_string += '\n';
    }
    return return_string;
}

var pattern = square_pattern(5);
console.log(pattern);