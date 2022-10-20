import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import ShowAllTransition from './ShowAllTransition';

const ALLTransition = () => {
    const [transitions, setTransitions] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/transaction')
            .then(res => res.json())
            .then(data => setTransitions(data.data))
    }, [])
    return (
        <div className='m-5'>
            <h1 className='mb-4'>Deposit History</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Transaction ID</th>
                        <th>Transaction Date</th>
                        <th>Status</th>
                        <th>Amount</th>

                    </tr>
                </thead>
                <tbody>
                    {
                       transitions?.map( (transition,index) =><ShowAllTransition
                          key={transition.id}
                          transition={transition}
                          index={index}
                       />) 
                    }

                </tbody>
            </Table>
      
         {/* withdrow */ }
    
        </div >
    );
};

export default ALLTransition;