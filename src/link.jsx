import { useState } from "react";

const Link = (props) => {
    const [click,setClick] = useState(0);

    const handleClick = () => {
        setClick(click+1)
    }
    return (
        <div>
            {click === 0 && 
            (<a href="#" onClick={handleClick}>This is the link</a>)}
            {click === 1 && 
            (<a href={props.url}>Are you sure you want to leave?</a>)}
        </div>
    )
}

export default Link