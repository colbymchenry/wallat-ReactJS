import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { useForm } from "react-hook-form";
import Register from '../Register';
import './index.scss'
import Modal from '../../components/Modal';
import { ShieldCheck, ShieldFillCheck } from 'react-bootstrap-icons';
import { useTransition, animation, animated, Spring, Transition } from 'react-spring'
import AnimatedDiv from '../../components/_animations/AnimatedDiv';
import header from '../../assets/image/loginHeader.png';

const Login = props => {

    const [loaded, setLoaded] = useState(false)
    const { register, handleSubmit } = useForm();
    const [showRegister, setShowRegister] = useState(false)

    const onSubmit = async data => {
        console.log(data)
    }

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
    <>
        <div className={"row login-header"}>
            <img src={header} alt={"header"} />
        </div>

        <div className={"container-fluid login-form"}>
          

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row center-xs">
                    <AnimatedDiv trigger={loaded} config={{
                        from: { opacity: 0, marginTop: 30, position: 'absolute' },
                        enter: { opacity: 1, marginTop: 0, position: 'absolute' },
                        delay: 500,
                        config: {
                            duration: 500,
                        }
                    }}>
                        <InputField ref={register({ required: true })} name="loginID" placeholder="Login ID" fieldClassName={"w100"} icon={<ShieldFillCheck />} />
                    </AnimatedDiv>
                </div>
                <div className="row center-xs">
                    <AnimatedDiv className="end-xs" trigger={loaded} config={{
                        from: { opacity: 0, marginTop: 30, position: 'absolute' },
                        enter: { opacity: 1, marginTop: 0, position: 'absolute' },
                        delay: 500,
                        config: {
                            duration: 500,
                        }
                    }}>
                        <small>Forgot ID ?</small>
                    </AnimatedDiv>
                </div>
                <div className="row center-xs">
                    <AnimatedDiv trigger={loaded} config={{
                        from: { opacity: 0, marginTop: 30, position: 'absolute' },
                        enter: { opacity: 1, marginTop: 10, position: 'absolute' },
                        delay: 1000,
                        config: {
                            duration: 500,
                        }
                    }}>
                        <Button submit={true} type={"primary"} label={"LOGIN"} className={"w100"} />
                    </AnimatedDiv>
                </div>
                <div className="row center-xs">
                    <AnimatedDiv trigger={loaded} config={{
                        from: { opacity: 0, marginTop: 30, position: 'absolute' },
                        enter: { opacity: 1, marginTop: 10, position: 'absolute' },
                        delay: 1500,
                        config: {
                            duration: 500,
                        }
                    }}>
                        <Button submit={false} type={"transparent"} label={"SIGN UP"} className={"w100"} callback={() => setShowRegister(!showRegister)} />
                    </AnimatedDiv>
                </div>
            </form>
            {/* <Modal show={showRegister} outsideClick={() => setShowRegister(false)}>
                <Register className={`register`} />
            </Modal> */}
        </div>
        </>
    )

}

export default Login