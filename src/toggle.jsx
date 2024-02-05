import { useState } from "react";
import check from './assets/check.svg';
import cross from './assets/cross.svg';
import question from './assets/question.svg';


const Toggle = (props) => {
const [state, setState] = useState(0);


const handleClick = () => { 
   if (state === 2) {
    setState(0);
   } else {
    setState (state + 1)
   }
}

switch (state) {
    case 0:
        return (<img src={check} onClick={handleClick}/>)
    case 1:
        return (<img src={cross} onClick={handleClick}/>)
    case 2:
        return (<img src={question} onClick={handleClick}/>)
}
}

export default Toggle