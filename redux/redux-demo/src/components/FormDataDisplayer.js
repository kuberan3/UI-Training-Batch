import { useSelector,useDispatch } from "react-redux";
import { storeFormValues } from "../redux";
import { useState } from "react";
import { styled } from "styled-components";

const DataCard=styled.div`
width:300px;
height:200px;
padding: 10px;
border-radius: 25px;
border:0.01px solid black;
box-shadow: 5px 10px  #888888;
padding:10px;
margin:10px;
display:flex;
flex-direction:column;
`
const Div = styled.div`
display:flex;
flex-wrap:wrap;`

const Button = styled.button`
padding:10px;
margin:10px;
width:100px;
height:30px;
cursor: pointer;
text-align: center;
text-decoration: none;
outline: none;
color: #fff;
background-color: skyblue;
border: none;
border-radius: 15px;
box-shadow: 0 2px #999;`

const FormDataDisplayer=()=>{

    const userData = useSelector((state) => state?.form?.formData);
    const dispatch=useDispatch();
    const [editIndex,seteditIndex]=useState(null)

    const handleDelete=(index)=>{
        
        const newArr=userData?.filter((item, Index) => Index !== index)
        dispatch(storeFormValues(newArr))
    }

    const handleEdit=(index)=>{
        
        seteditIndex(index)
    }

    const handleSave=(index)=>{
        
        seteditIndex(null)
        dispatch(storeFormValues([...userData?.slice(0, index), changingData, ...userData?.slice(index + 1)]))
        
    }

    const [changingData, setchangingData] = useState({
        name: "",
        email: "",
      });
    const handleChange=(e)=>{
        e.preventDefault();
        const { name, value } = e.target;
        setchangingData({ ...changingData, [name]: value });
        
    }

    return (
        <Div>
        {
        userData?.map((data,index) => (
            <DataCard>
                    {
                        index === editIndex ? (
                            <input
                                name="name"
                                onChange={handleChange}
                                // value={data?.name || ''}
                            />
                        ):(<p>Name:{data?.name}</p>)
                    }
                
                
                     {
                        index === editIndex ? (
                            <input
                            name="email"
                            onChange={handleChange}
                                // value={data?.email || ''}  
                            />
                        ):( <p>Email:{data?.email}</p>)
                    }
                    {index === editIndex?(
                         <Button onClick={()=>handleSave(index)}>Save</Button>
                         ):(<Button onClick={()=>handleDelete(index)}>Delete</Button>)
                    }
                    <Button onClick={()=>handleEdit(index)}>Edit</Button>
        
        </DataCard>
        ))  
        }
      </Div>

        )
 }
export default FormDataDisplayer