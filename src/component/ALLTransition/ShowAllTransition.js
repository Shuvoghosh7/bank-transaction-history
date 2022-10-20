import React from 'react';

const ShowAllTransition = ({transition,index}) => {
    console.log(transition)
    const{userName,email,transactionDate,status,amount, _id}=transition
    return (
        <tr>
          <td>{index+1}</td>
          <td>{userName}</td>
          <td>{email}</td>
          <td>{_id}</td>
          <td>{transactionDate}</td>
          <td>{status}</td>
          <td>{amount}</td>
          
        </tr>
    );
};

export default ShowAllTransition;