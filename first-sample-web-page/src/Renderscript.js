import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response) => {

    
  console.log("test", response.data);
  let i
  for(i in response.data)
  {
    console.log(response.data[i])
  }
})
.catch((error) => {
  console.error("test", error);
});