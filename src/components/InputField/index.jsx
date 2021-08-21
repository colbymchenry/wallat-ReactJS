import './index.scss'
import React from 'react';

const InputField = React.forwardRef((props, ref) => {

    return (
        <div className={`input-field${props?.fieldClassName ? ' ' + props?.fieldClassName : ''}`}>
            {props?.icon && 
                <span className={"icon"}>
                {props?.icon}
                </span>
            }
        <input ref={ref} type={props?.type ? props.type : "text"} name={props?.name} className={`${props?.icon ? 'icon ' : ''}${props?.inputClassName ? props?.inputClassName : ''}`} style={props?.style} placeholder={props?.placeholder} />
        </div>
    )

})

export default InputField