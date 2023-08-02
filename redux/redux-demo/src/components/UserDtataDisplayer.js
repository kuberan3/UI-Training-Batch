import { useSelector, useDispatch } from "react-redux";
const UserDataDisplayer = () => {
    const userData = useSelector((state) => state?.user?.data);
    console.log(userData)
    return ( 
        <div>

        </div>
     );
}
 
export default UserDataDisplayer;