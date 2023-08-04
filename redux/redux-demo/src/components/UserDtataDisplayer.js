import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, postData } from "../redux/userDataFetch/userDataAction";
import { Button } from 'antd';
import { styled } from "styled-components";
import BurstButton from "./Buttonburst";
const DataDisplay = () => {
  const dispatch = useDispatch();

  const [userData, setUsers] = useState([]);
const Btn=styled(Button)`
  background-color: red;
  `
  const data = useSelector((state) => state?.user?.data);
  const loading = useSelector((state) => state?.user?.data?.loading);
  const error = useSelector((state) => state?.user?.data?.error);

  useEffect(() => {
    if (data?.length > 0) setUsers(data);
  }, [data]);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handlePost = () => {
    const abc = "kuberan";
    dispatch(postData({ name: abc }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data to display.</div>;
  }
  return (
    <div>
      <Btn type="primary"
        onClick={() => {
          handlePost();
        }}
      >
        Add data
      </Btn>
    
      <h2>Data from API:</h2>
      <ul>
        {userData &&
          userData?.map((item) => (
            <>
              <li key={item.id}>{item.name}</li>
              {/* <li>{item.email}</li> */}
            </>
          ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
