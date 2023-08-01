import { useSelector,useDispatch } from "react-redux";
import { storeFormValues } from "../redux";
import { useState } from "react";

const FormDataDisplayer=()=>{

    const userData = useSelector((state) => state?.form?.formData);
    const dispatch=useDispatch();
  
    const handleDelete=(index)=>{
        const newArr=userData.filter((item, Index) => Index !== index)
        dispatch(storeFormValues(newArr))
    }
    const [editIndex,seteditIndex]=useState(null)

    const handleEdit=(index)=>{
        seteditIndex(index)
    }
    const handleSave=()=>{
        seteditIndex(null)
        console.log("ind",editIndex)
        console.log(EditData)
    }
    // const [EditData,setEditData]=useState({})
    const handleChange=(event)=>{
        const { name, value } = event.target;
    setEditData({ ...EditData, [name]: value });
    console.log(EditData)
    }
    const [EditEmail,setEditEmail]=useState()
    const [EditName,setEditName]=useState()
    const [EditData,setEditData]=useState({
        name: {EditName},
        email:{EditEmail}
    })

    return (
        <table>
        {
        userData?.map((data,index) => (
            <tr>
                <td>
                    {
                        index === editIndex ? (
                            <input
                                name="name"
                                onChange={(e)=>{setEditName(e.target.value)}}
                                value={data.name || ''}
                            ></input>
                        ):(data?.name)
                    }
                </td>
                <td>
                     {
                        index === editIndex ? (
                            <input
                            name="email"
                            onChange={()=>handleChange}
                                value={data.email || ''}
                            ></input>
                        ):(data?.email)
                    }
                </td>
                <td>
                    {index === editIndex?(
                         <button onClick={handleSave}>Save</button>
                    ):(<button onClick={()=>handleDelete(index)}>Delete</button>)
                    }
                </td>
                <td>
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                </td>
            </tr>
        ))
        }
      </table>

        )
 }
export default FormDataDisplayer