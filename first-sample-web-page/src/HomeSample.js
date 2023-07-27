// import { useParams } from "react-router-dom";
const HomeSample = (props) => {
    console.log(props.data)
    return ( 
        <div>
            <h1>The Home Page1</h1>
            <h1>The Home Page</h1>
            {/* <h1>ID: {props.data[1].name}</h1> */}
        </div>
     );
};
 
export default HomeSample;