function star_patter(num_of_rows)
{
    var return_variable = '';
    for (i = 0; i < num_of_rows; i++ )
    {
        for(j = 0; j <= i; j++)
        {
            return_variable += '*';
        }
        return_variable += '/n';
    }
    return return_variable;
}

var star_pattern = star_patter(5);
console.log(star_pattern);
console.log(star_pattern);