import React,{useState} from "react";
import RelationForm from "./RelationForm";
import "../styles/App.css"

const App= ()=>{

    const [answer,setAnswer] = useState("");
    return(
        <div>
            <RelationForm setAnswer={setAnswer} />
            <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}

export default App