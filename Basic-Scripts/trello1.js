/* const days = ['Mon','Tue','Wed','Thr','Fri','Sat']

console.log(days[0]);

days.forEach(function (day)
{

    console.log(day);   
}) */

const days = ['Mon','Tue','Wed','Thr','Fri','Sat']

console.log(days[0]);

days.forEach(function (d,index)
{

    console.log(`starts with ${index+1} -- ${d}`);   
})