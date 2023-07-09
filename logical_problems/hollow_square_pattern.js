function hollow_square_pattern(num_of_rows)
{
    var return_pattern = '';
    for(i = 0 ; i < num_of_rows ; i++)
    {
        for(j = 0 ; j < num_of_rows ; j++)
        {
            if(i === 0 || i === num_of_rows-1)
            {
                return_pattern += '*';
            }
            else
            {
                if(j === 0 || j === num_of_rows -1)
                {
                    return_pattern += '*';
                }
                else
                {
                    return_pattern += ' ';
                }
            }
        }
        return_pattern += '\n';
    }
    return return_pattern;
}

get_pattern = hollow_square_pattern(5);
console.log(get_pattern);