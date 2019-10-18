const month = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']

console.log(month[0]);

month.forEach(function(months,index)
{

    console.log(`starts with ${index+1} -- ${months}`);   
})