
import { useTransition, animation, animated } from 'react-spring'

const AnimatedDiv = props => {

    const transition = useTransition(props?.trigger, props?.config ? props.config : {
        from: { opacity: 0 },
        enter: { opacity: 1 }
    })

    return (
        transition((style, item) => 
        item ? <animated.div style={style} className={`w100${props?.className ? ' ' + props.className : ''}`}>{props.children}</animated.div> : ''
        )
    )

}

export default AnimatedDiv