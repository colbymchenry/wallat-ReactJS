import React, { useState } from 'react'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { useForm } from "react-hook-form";

const Register = props => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={props?.className}>
            <div className="row">
                <InputField ref={register({ required: false })} name="username" placeholder="Username (Optional)" className={"d-center"} />
            </div>
            <div className="row">
                <InputField ref={register({ required: false })} name="email" placeholder="Email (Optional)" className={"d-center"} />
            </div>
            <div className="row">
                <Button submit={true} type={"transparent"} label={"ENROLL"} className={"d-center"} />
            </div>
        </form>
    )

}

export default Register