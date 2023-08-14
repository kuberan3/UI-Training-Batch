// // //reversing the array
// // arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']
// // arr2=arr.reverse()
// // console.log(arr2)

// //similar elements

// // arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
// // arr2 = [7, 13, 25, 46, 58, 70, 84];
// // count=0
// // for(i=0;i<arr1.length;i++)
// // {
// //     for(j=0;j<arr2.length;j++)
// //     {
// //         if(arr1[i]==arr2[j])
// //         {
// //             count++
// //         }
// //     }
// // }
// // if(count!=0)
// // {
// //     console.log("Yes")
// // }
// // else{
// //     console.log("No")
// // }

// //strictly increase

// arr1=[4,5,6,7,8]
// arr2=[3,4,6,6,7,8,9]
// arr3=[34,23,45,55,67,77]

// for(i=0;i<arr1-1;i++)
// {
//     if(arr1[i]!=(arr1[i+1]+1))
//     {
//         break
//     }
// }
// if(i<arr1-1)
// {
//     console.log("Not")
// }
// else{
//     console.log("yes")
// }

// //convertion of coins

// Rupee=60
// Rupee_25=0
// Rupee_10=0
// Rupee_5=0
// Rupee_2=0
// Rupee_1=0
// while(Rupee!=0)
// {   if(Rupee>25)
//     {
//         Rupee_25=Rupee/25
//     Rupee=Rupee%25
//     }
//     if(Rupee>10)
//     {
//         Rupee_10=Rupee/10
//         Rupee=Rupee%10
//     }
//     if(Rupee>5)
//     {
//         Rupee_10=Rupee/5
//         Rupee=Rupee%5
//     }
//     if(Rupee>2)
//     {
//         Rupee_10=Rupee/2
//         Rupee=Rupee%2
//     }
//     if(Rupee>1)
//     {
//         Rupee_10=Rupee/1
//         Rupee=Rupee%1
//     }
// }
// console.log(Rupee,
//     Rupee_25,
//     Rupee_10,
//     Rupee_5,
//     Rupee_2,
//     Rupee_1)



// //add suffix to the mumber
// // a=[22,8, 301, 404, 35, 99]
// // b=[]
// // for(i=0;i<a.length;i++)
// // {
// //     if(a[i]%10==0 || a[i]%10==4 || a[i]%10==5 || a[i]%10==6 || a[i]%10==7 || a[i]%10==8 || a[i]%10==9 )
// //     {
// //         b.push(a[i]+"th")
// //     }
// //     else if(a[i]%10==1)
// //     {
// //         b.push(a[i]+"st")
// //     }
// //     else{
// //         b.push(a[i]+"nd")
// //     }
// // }
// // console.log(b)



// function Hill_Cipher()
// {
//     Name = "javascript is cool";
   
    // var New_Name = Name.split("")
    // for(i=0;i<Name.length;i++)
    // {
    //     if(New_Name[i]=="a")
    //     {
    //         New_Name[i]='4'
    //     }
    //     else if(New_Name[i]=='e')
    //     {
    //         New_Name[i]='3'
    //     }
    //     else if(New_Name[i]=='i')
    //     {
    //         New_Name[i]='1'
    //     }
    //     else if(New_Name[i]=='o')
    //     {
//             New_Name[i]='0'
//         }
//         else if(New_Name[i]=='s')
//         {
//             New_Name[i]='5'
//         }
//     }
//     cipher=New_Name[0]
//     for(i=1;i<New_Name.length;i++)
//     {
//         cipher=cipher.concat(New_Name[i])
//     }
//     console.log(cipher)

// }



// function vowelCount()
// {
//     sentance="Good, better, best. Never let it rest. 'Til your good is better and your better is best"
//     count=0
//     for(i=0;i<sentance.length;i++)
//     {
//         if(sentance[i]=='a' || sentance[i]=='e' || sentance[i]=='i' || sentance[i]=='o' || sentance[i]=='u')
//         {
//             count++
//         }
//     }
//     console.log(count)
// }


function caseConvertion()
{   
    sentance="The Quick Brown Fox"
    
    a=sentance.split("")
    New_Name=''
    for(i=0;i<sentance.length;i++)
    {
        if(a[i].toLowerCase() !== a[i])
        {
            New_Name=New_Name.concat(a[i].toLowerCase())
        }
        else if(a[i].toUpperCase()!==a[i]){
            New_Name=New_Name.concat(a[i].toUpperCase())
        }
        else{
            New_Name=New_Name.concat(a[i])
        }
    }
    console.log(New_Name)
}



// function iteration()
// {
//     for(i=0;i<10;i++)
//     {
//         if(i%2==0)
//         {
//             console.log(i,"is even")
//         }
//         else{
//             console.log(i," is odd")
//         }
//     }
// }
// iteration()

//reverse the string


//lcm
// a=5
// b=18
// i=b
// while(true)
// {
//     if(i%a==0 && i%b==0)
//     {
//         break
//     }i++
// }
// console.log(i)



// const person = {};
// console.log(person)

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue"; 

// console.log(person)

// person.firstName="kuberan"

// console.log(person)


function fontIncrement()
{
    let x=100
    setInterval(function(){
        console.log(x)
        x=x-1
       
    },1000)

}

fontIncrement()