import { useState } from "react"

const UrlClick = () => {
    const [state,setState] = useState(0);


   if (state == 1) {
    setState(state+1)
    return (
        <p>Are you sure you want to leave?</p>
    )
    }
}


export default UrlClick