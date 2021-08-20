import './index.scss'
import React from 'react';

const InputField = React.forwardRef((props, ref) => {

    return (
        <input ref={ref} type={props?.type ? props.type : "text"} name={props?.name} className={`input-field${props?.className ? ' ' + props?.className : ''}`} style={props?.style} placeholder={props?.placeholder} />
    )

})

export default InputField