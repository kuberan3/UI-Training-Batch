// // var name1 = "kuberan";
// // var name2 = "venkatesh";
// // var area = "villupuram";
// // var data = `firstname=${name1} lastname=${name2} location=${area}`;
// // // console.log(data)

// // add = (x, y) => {
// //   return x + y;
// // };
// // // console.log(add(2,3))

// // sub = (x, y) => {
// //   return x - y;
// // };
// // // console.log(sub(5,3))

// // addition = (call, ...a) => {
// //   console.log("call", call, "value", a);
// //   sum = 0;
// //   for (i = 0; i < a.length; i++) {
// //     sum = a[i];
// //   }

// //   call(sum);
// // };
// // print = (result) => {
// //   console.log(result);
// // };
// // // let arr1=[1,2,3]
// // addition(print, 1, 2, 3);

// // // console.log('test--',addition(2,3,1,5))

// // let arr2 = [4, 5, 6];
// // // arr1[3]=2
// // // let arr3 = [...arr1, ...arr2];
// // // let arr3=arr1.concat(arr2)

// // // console.log(arr3)
// // // var sum = 0;
// // // for (i = 0; i < arr3.length; i++) {
// // //   sum += arr3[i];
// // // }
// // // console.log(sum)

// // var names = ["alpha", "beta", "gamma", "delta"];

// // var x,y,z,c
// // [x,y,z,c]=names

// // console.log(x,y,z,c)
// // var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

// // console.log(firstName);//"alpha"
// // console.log(secondName);//"beta"

// // //After swapping
// // [firstName, secondName] = [secondName, firstName]

// // console.log(firstName);//"beta"
// // console.log(secondName);//"alpha"

// // var a=[1,2,3,4]
// // sqr =(n)=>{
// //   return n*n
// // }
// // var b=a.map(sqr)
// // console.log(b)

// // array map

// arr1=[1,2,3,4,5]
// doublevalue = (num) => {
//   return num*2
// }
// var arr2=arr1.map(doublevalue)

// // console.log(arr2)

// StringConversion=(num)=>{
//   return String(num)
// }
// var arr3=arr1.map(StringConversion)
// // console.log(arr3)

// var names=["john", "JACOB", "jinGleHeimer", "schmidt"]

// capital=(num)=>{
//   return num.toUpperCase()

// }
// var arr=names.map(capital)
// // console.log(arr)

// var employee=[
//   {
//       name: "Angelina Jolie",
//       age: 80
//   },
//   {
//       name: "Eric Jones",
//       age: 2
//   },
//   {
//       name: "Paris Hilton",
//       age: 5
//   },
//   {
//       name: "Kayne West",
//       age: 16
//   },
//   {
//       name: "Bob Ziroll",
//       age: 100
//   }
// ]

// namesOnly=(obj)=>{
//   return obj.name
// }

// var nums=employee.map(namesOnly)

// // console.log(nums)

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] },
]; // Use map to calculate the average test score for each student
// Use filter to only select students with an average above 90

// findScore=(a)=>{
//     var total=0
//       for(i=0;i<a.length;i++)
//       {
//         total=total+a[i]
//       }
//       return total/a.length
// }

// findScore = (a) => {
//   var newStudent = {};
//   newStudent.name = a.name;
//   let averagefunc = (b) => {
//     let tot = 0;
//     for (i = 0; i < b.length; i++) {
//       tot += b[i];
//     }
//     // console.log(tot/b.length)
//     return tot / b.length;
//   };
//   newStudent.avg = averagefunc(a.scores);
//   return newStudent;
// };

avgMarks = students.map((a) => {
  var newStudent = {};
  newStudent.name = a.name;
  let averagefunc = (b) => {
    let tot = 0;
    for (i = 0; i < b.length; i++) {
      tot += b[i];
    }
    return tot / b.length;
  };
  newStudent.avg = averagefunc(a.scores);
  return newStudent;
});

console.log(avgMarks);

var finalList = avgMarks.filter((a) => {
  return a.avg >= 90;
});

console.log(finalList);
