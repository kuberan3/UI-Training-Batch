var name1 = "kuberan";
var name2 = "venkatesh";
var area = "villupuram";
var data = `firstname=${name1} lastname=${name2} location=${area}`;
// console.log(data)

add = (x, y) => {
  return x + y;
};
// console.log(add(2,3))

sub = (x, y) => {
  return x - y;
};
// console.log(sub(5,3))

addition = (call, ...a) => {
  console.log("call", call, "value", a);
  sum = 0;
  for (i = 0; i < a.length; i++) {
    sum = a[i];
  }

  call(sum);
};
print = (result) => {
  console.log(result);
};
// let arr1=[1,2,3]
addition(print, 1, 2, 3);

// console.log('test--',addition(2,3,1,5))

let arr2 = [4, 5, 6];
// arr1[3]=2
// let arr3 = [...arr1, ...arr2];
// let arr3=arr1.concat(arr2)

// console.log(arr3)
// var sum = 0;
// for (i = 0; i < arr3.length; i++) {
//   sum += arr3[i];
// }
// console.log(sum)
