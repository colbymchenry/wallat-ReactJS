import React, { useState } from 'react'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { useForm } from "react-hook-form";
import Register from '../Register';
import './index.scss'
import Modal from '../../components/Modal';
import { ShieldCheck, ShieldFillCheck } from 'react-bootstrap-icons';

const Login = props => {

    const { register, handleSubmit } = useForm();
    const [showRegister, setShowRegister] = useState(false)

    const onSubmit = async data => {
        console.log(data)
    }

    return (
        <div className={"container-fluid"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <InputField ref={register({ required: true })} name="loginID" placeholder="Login ID" className={"h-center"} icon={<ShieldFillCheck />} />
                </div>
                <div className="row">
                    <Button submit={true} type={"primary"} label={"LOGIN"} className={"h-center"} />
                </div>
                <div className="row">
                    <Button submit={false} type={"transparent"} label={"SIGN UP"} className={"h-center"} callback={() => setShowRegister(!showRegister)} />
                </div>
            </form>
            <Modal show={showRegister} outsideClick={() => setShowRegister(false)}>
                <Register className={`register`} />
            </Modal>
        </div>
    )

}

export default Login