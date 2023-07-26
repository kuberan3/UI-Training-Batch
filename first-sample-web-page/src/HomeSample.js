import { useParams } from "react-router-dom";
const HomeSample = () => {
    let { id } = useParams();
    return ( 
        <div>
            <h1>The Home Page1</h1>
            <h1>The Home Page</h1>
            <h1>ID: {id}</h1>
        </div>
     );
};
 
export default HomeSample;