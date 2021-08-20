import React, { useState } from 'react'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { useForm } from "react-hook-form";
import Register from '../Register';
import './index.scss'
import Modal from '../../components/Modal';

const Login = props => {

    const { register, handleSubmit } = useForm();
    const [showRegister, setShowRegister] = useState(false)

    const onSubmit = async data => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <InputField ref={register({ required: true })} name="loginID" placeholder="Login ID" className={"d-center"} />
                </div>
                <div className="row">
                    <Button submit={true} type={"primary"} label={"LOGIN"} className={"d-center"} />
                </div>
                <div className="row">
                    <Button submit={false} type={"transparent"} label={"SIGN UP"} className={"d-center"} callback={() => setShowRegister(!showRegister)} />
                </div>
            </form>
            <Modal show={showRegister} outsideClick={() => setShowRegister(false)}>
                <Register className={`register`} />
            </Modal>
        </>
    )

}

export default Login