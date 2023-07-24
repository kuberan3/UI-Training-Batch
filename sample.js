import axios from "axios"

// // console.log(c.toFixed())

// // console.log(5 - 'c')

// // var a=10;

// // console.log(typeof(a.toString()));

// // console.log(3 * 'a')

// // var doubleQuoted = "This Is New \"Java Script\" Page";

// // var doubleQuoted = "This Is New \'Java Script\' Page";

// // var doubleQuoted = "This Is New Java Script Page";

// // console.log(doubleQuoted.toLowerCase())

// // console.log(doubleQuoted.toUpperCase())

// // console.log(doubleQuoted.length)

// // console.log(doubleQuoted.indexOf('Java'))

// // console.log(doubleQuoted.slice(7))

// // console.log(doubleQuoted.lastIndexOf('a'))

// // console.log('kuberan'+' '+'venkatesh')

// // var firstName='kuberan'
// // var secondName='venkatesh'

// // console.log(firstName.concat(" ",secondName))

// // var num1 = 10;

// // var num2 = 20;

// // console.log(num1+num2)

// // var age=15

// // if(age>18)

// // {
// //     console.log('elligible')
// // }
// // else{
// //     console.log('not')
// // }

// // if(num1>num2)
// // {
// //     console.log(num1)
// // }
// // else if(num1<num2)
// // {
// //     console.log(num2)
// // }
// // else{
// //     console.log(num1,num2)
// // }

// // var day = "mon";

// // switch (day) {
// //   case "mon": {
// //     console.log("1");
// //   }
// //   case "tues": {
// //     console.log("2");
// //   }
// //   case "wed": {
// //     console.log("3");
// //   }
// //   case "thurs": {
// //     console.log("4");
// //   }
// //   case "fri": {
// //     console.log("5");
// //   }
// //   case "sat": {
// //     console.log("6");
// //   }
// //   default: {
// //     console.log("sunday");
// //   }
// // }

// // var Alphabet ='c'

// // if(Alphabet=='a' || Alphabet=='e' || Alphabet=='i' || Alphabet=='o' || Alphabet=='u'){
// //   console.log('vowel')
// // }
// // else
// // {
// //     console.log('consonent')
// // }

// // console.clear()

// // var mNum;
// // console.log(mNum)
// // var mNum = null
// // console.log(mNum)

// // console.log(undefined == null)
// // console.log(undefined === null)
// // console.log(undefined == null)
// // console.log(undefined === null)

// // var mark=50

// // if(mark >= 80)
// // {
// //   console.log('A')
// // }
// // else if(mark >= 70 && mark < 80)(
// //   console.log('B')
// // )
// // else if( mark >=60 && mark < 70)
// // {
// //     console.log('C')
// // }
// // else if(mark >= 50 && mark< 60)
// // {
// //   console.log('D')
// // }
// // else{
// //   console.log('Fail')
// // }

// //dicount problem

// // var numOfitem=8
// // var unit=100
// // var total
// // var price
// // total = unit * numOfitem
// // console.log("total",total)

// // if(total>=1000)
// // {
// //   price=total-(total/10)
// // }
// // else{
// //   price=total
// // }
// // console.log("Discount",price)

// // const person = [
// //   {
// //     name: "kuberan",
// //     age: 18,
// //     city: "chennai",
// //     mobile: "4225",
// //     address: {
// //       village: "villupuram",
// //       post: "panampattu",
// //       pin: 605103,
// //     },
// //   },
// // ];
// // person = { new: "name" };
// // console.log(person);

// //largest string

// // arr=["kuberan","venkatesh","purushothaman","rajkumar"]
// // var length
// // var max=0
// // for(i=0;i<arr.length;i++)
// // {
// //   length=arr[i].length
// //   if(length>max)
// //   {
// //     max=length
// //     l=i
// //   }
// // }
// // console.log(arr[l],max)

// //to remove 0 null undefined from the array
// // arr = [0, undefined, null, false, 2, 23, -3, 4, 87];
// // for (i = 0; i < arr.length; i++) {
// //   if (Boolean(arr[i]) == true) {
// //     console.log(arr[i]);
// //   }
// // }

// // let a=2.46
// // const

// // //

// // let obj = [
// //   {
// //     name: "kubeeran",
// //     age: "23",
// //     height: "6",
// //     weight: "50",
// //   },
// //   {
// //     name: "karthi",
// //     age: "25",
// //     height: "5.6",
// //     weight: "55",
// //   },
// // ];

// // function callFunc(a,b){
// //  console.log('a',a+b)
// // }

// //alternative add

// var arr=[1,2,3,4,5,6,7]
// arrNew=[]
// first=0
// last=0
// for(i in arr){
//     if(i%2==0){
//       first=first + arr[i]
//     }
//     else{
//       last=last+arr[i]
//     }
// }
// arrNew[0]=first
// arrNew[1]=last
// console.log(arrNew[0],arrNew[1])

// // //numbera checking

// arr1=[1,2,3]
// arr2=[2,5,4]
// lable=0
// for(i in arr1)
// {
//   for(j in arr2)
//   {
//     if(arr1[i]==arr2[j]){
//       lable=1
//     }

//   }
// }
// if(lable!=0)
// {
//   console.log("True")
// }
// else{
//   console.log("Fale")
// }

// // // difference of two array

// arr1=[1,2,3]
// arr2=[2,3,5]
// for(i in arr1)
// { lable=0
//   for(j in arr2)
//   {
//     if(arr1[i]==arr2[j])
//     {
//       lable=1
//     }
//   }
//   if(lable==0)
//   {
//     console.log(arr1[i])
//   }
// }
// for(i in arr2)
// { lable=0
//   for(j in arr2)
//   {
//     if(arr2[i]==arr1[j])
//     {
//       lable=1
//     }
//   }
//   if(lable==0)
//   {
//     console.log(arr2[i])
//   }
// }


// // //food delivery app
// customers_data = {
//   Ben10: [22, 30, 11, 17, 15, 52, 27, 12],
//   Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
//   Zeeshan: [22, 30, 11, 5, 17, 30, 6, 57],
// };
// for (i in customers_data) {
//   person = customers_data[i];
//   lable =0
//   for (j in person) {
//     if (person[j] >= 20) {
//       lable++
//     }
//   }
//   if(lable>=5)
//   {
//     console.log(i)
//   }
// }



// // //list the properties of the object
// student = { 
//     name: "David Rayy", 
//     sclass: "VI", 
//     rollno: 12 
// }; 
// arr=[]
// j=0
// for(i in student)
// {
//   arr.push(i)
//   j++
// }
// console.log(arr)

// // //deleting the key from the object

// // console.log(student)

// //length of the object key

// student =  {  
//   name : "David Rayy",  
//   sclass : "VI",  
//   rollno : 12   
// } 
// var len
// len=Object.keys(student).length
// console.log(len)


// // //reading status
// library = [ 
//   { 
//   author: 'Bill Gates', 
//   title: 'The Road Ahead', 
//   readingStatus: true 
//   }, 
//   { 
//   author: 'Steve Jobs', 
//   title: 'Walter Isaacson', 
//   readingStatus: true 
//   }, 
//   { 
//   author: 'Suzanne Collins', 
//   title: 'Mockingjay: The Final Book of The Hunger Games', 
//   readingStatus: false 
//   }];

//   for(i in library)
//   {
//     person=library[i]
//     if(person.readingStatus==true)
//     {
//       console.log("you have already read",person.title,"by",person.author)
//     }
//     else
//     {
//       console.log("you still need to read",person.title,"by",person.author)
//     }
//   }



// function calculation()
//     {
//         let a=document.getElementById("num1");
        
//         let b=document.getElementById("num2");
//         let c=a+b;
//         document.getElementById("result").innerHTML=c;
//     }
// console.log("hi kuberan")

async fetchingData = () =>{
   const responseData = await  axios .get('https://jsonplaceholder.typicode.com/users')
   console.log(responseData.data);
}
