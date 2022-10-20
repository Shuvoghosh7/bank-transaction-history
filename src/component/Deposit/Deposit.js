import React from 'react';
import { useForm } from "react-hook-form";
const Deposit = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/api/v1/transaction', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="bg-base-100 mx-auto lg:w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-base-100 mx-auto p-5">
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Project Name"
                        className="input input-bordered bg-white w-100"
                        {...register("userName", {
                            required: {
                                value: true,
                                message: "user Name is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-100 mx-auto">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Project Name"
                        className="input input-bordered bg-white w-100"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "user Email is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-100 mx-auto">
                    <label className="label">
                        <span className="label-text">Transaction Date</span>
                    </label>
                    <input
                        type="date"
                        className="input input-bordered bg-white w-100"
                        {...register("transactionDate", {
                            required: {
                                value: true,
                                message: "transaction Date is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-100 mx-auto">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <select {...register("status")} className="input input-bordered bg-white w-100">
                        <option value="Deposit">Deposit</option>
                        <option value="Unpad">Withdraw</option>
                    </select>
                </div>
                <div className="form-control w-100 mx-auto">
                    <label className="label">
                        <span className="label-text">Amount</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Project Name"
                        className="input input-bordered bg-white w-100"
                        {...register("amount", {
                            required: {
                                value: true,
                                message: " amount is required"
                            }
                        })}
                    />
                </div>

                <div className="modal-action w-full mx-auto m-5">
                    <input className='btn btn-accent text-white w-full' type="submit" value="Deposit" />
                </div>
            </form>
        </div>
    );
};

export default Deposit;