import { useSelector, useDispatch } from "react-redux";
import { storeFormValues } from "../redux";
import { useState } from "react";
import styled from "styled-components";
import { storeDeletedValues } from "../redux/forms/FormAction";

const DataCard = styled.div`
  width: 300px;
  height: 200px;
  padding: 10px;
  border-radius: 25px;
  border: 0.01px solid black;
  box-shadow: 5px 10px #888888;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: skyblue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px #999;
`;

const FormDataDisplayer = () => {
  const userData = useSelector((state) => state?.form?.formData);
  const dispatch = useDispatch();
  const [editIndex, seteditIndex] = useState(null);

  const handleDelete = (index) => {
    // const newArr=userData?.filter((item, Index) => Index !== index)
    // dispatch(storeFormValues(newArr))
    dispatch(storeDeletedValues(index));
  };

  const handleEdit = (index) => {
    setchangingName(userData[index].name || " ");
    setchangingEmail(userData[index].email || " ");
    seteditIndex(index);
  };

  const handleSave = (index) => {
    const changingData = { name: changingName, email: changingEmail };
    seteditIndex(null);
    dispatch(
      storeFormValues([
        ...userData?.slice(0, index),
        changingData,
        ...userData?.slice(index + 1),
      ])
    );
  };
  const [changingName, setchangingName] = useState("");
  const [changingEmail, setchangingEmail] = useState("");
  console.log("hi")
  return (
    <Div>
      {userData?.map((data, index) => (
        <DataCard>
          {index === editIndex ? (
            <input
              name="name"
              onChange={(e) => setchangingName(e.target.value)}
              value={changingName}
            />
          ) : (
            <p>Name:{data?.name}</p>
          )}
          {index === editIndex ? (
            <input
              name="email"
              onChange={(e) => setchangingEmail(e.target.value)}
              value={changingEmail}
            />
          ) : (
            <p>Email:{data?.email}</p>
          )}
          {index === editIndex ? (
            <Button onClick={() => handleSave(index)}>Save</Button>
          ) : (
            <Button onClick={() => handleDelete(index)}>Delete</Button>
          )}
          <Button onClick={() => handleEdit(index)}>Edit</Button>
        </DataCard>
      ))}
    </Div>
  );
};
export default FormDataDisplayer;
