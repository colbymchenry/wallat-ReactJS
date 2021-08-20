import './index.scss'
import React, { useRef, useEffect } from 'react'

const Modal = props => {

    const node = useRef();

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            if (props?.insideClick){
                props.insideClick();
            }
          return;
        }

        if (props?.outsideClick) {
            props.outsideClick();
        }
    }

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div ref={node} className={`modal ${props.show ? "show" : ""} ${props?.animation ? props?.animation : 'slide-up'}`}>
            {props.children}
        </div>
    )
}

export default Modal