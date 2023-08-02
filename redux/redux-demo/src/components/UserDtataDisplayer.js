// import { useSelector, useDispatch } from "react-redux";
// const UserDataDisplayer = () => {
//     const userData = useSelector((state) => state?.user);
//     console.log(userData)
//     return ( 
//         <div>
            
//         </div>
//      );
// }
 
// export default UserDataDisplayer;
// DataDisplay.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/userDataFetch/userDataAction';

const DataDisplay = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.user?.data);
  const loading = useSelector((state) => state?.user?.data?.loading);
  const error = useSelector((state) => state?.user?.data?.error);
  useEffect(() => {
    // Dispatch the fetchData action when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

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
      <h2>Data from API:</h2>
      <ul>
        {data?.map((item) => (
          <>
          <li key={item.id}>{item.name}</li>
          <li>{item.email}</li>
          </>
          
          
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
