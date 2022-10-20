import React, { useEffect, useState } from 'react';

import ShowAllTransition from './ShowAllTransition';

const ALLTransition = () => {
    const [transitions, setTransitions] = useState([])

    const [array, setArray] = useState([])
    console.log(array)
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/transaction?email=sonjoygosh111@gmail.com')
            .then(res => res.json())
            .then(data => setTransitions(data.data))
    }, [])

    return (
        <div className='m-5'>
            <h1 className='mb-4'>Deposit History</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                            transitions?.map((transition, index) => <ShowAllTransition
                                key={transition.id}
                                transition={transition}
                                index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>

            {/* withdrow */}
            <div>
                <h1>Total Deposit Amount:
                    {Object.values(transitions).map((item) => item.amount).reduce((a, b) => a + b, 0)}
                    tk</h1>
            </div>
        </div >
    );
};

export default ALLTransition;