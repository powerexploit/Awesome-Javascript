 let get = function(marks,total)
{
   let percent = (marks/total) * 100;

   if(percent >= 90)
   console.log('grade = A')

   else if(percent >= 80)
   console.log('grade = B')
  
    else if(percent >= 75)
    console.log('grade = C')

    else if(percent >= 70)
    console.log('grade = D')

    else
    console.log('grade = E')
}

/*switch (percent) {
    case 1:
    if(percent>=90)
        console.log("grade A")
        break;
    case 2:
    if(percent>=80)
        console.log("grade B")
        break;
    default:
        console.log("grade c")
        break;
}
}*/

get(400,600)
console.log(get)