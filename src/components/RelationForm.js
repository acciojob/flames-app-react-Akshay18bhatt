import React,{useState} from "react";



const RelationForm= ()=>{

    const [answer,setAnswer] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");

    function clearAll(){
        setAnswer("");
        setFirstName("");
        setSecondName("");
    }
    
    function checkRelation(){
        
        if(firstName==="" || secondName===""){
            alert("Please Enter valid input");
            return;
        }
        let arr1= firstName.trim().split("");
        let arr2= secondName.trim().split("");
        console.log(arr1,arr2);

        for(let i=0;i<arr1.length;i++){

            let index= arr2.indexOf(arr1[i]);

            if(index!==-1){
                arr1.splice(i,1);
                arr2.splice(index,1);
            }
        }
        // console.log(arr1,arr2);
        let namesLength= ((arr1.length)+(arr2.length))%6;
        // console.log(namesLength);
        switch(namesLength){
            case 1:
                setAnswer("Friends");
                break;

            case 2:
                setAnswer("Love");
                break;
            case 3:
                setAnswer("Affection");
                break;

            case 4:
                setAnswer("Marriage");
                break;
            case 5:
                setAnswer("Enemy");
                break;

            case 0:
                setAnswer("Siblings");
                break;

        }


    }

    return(

        
        <div>
            <input data-testid="input1" type="text" placeholder="First Name"
                onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} name="name1"
            >

            </input>
            <input data-testid="input2" type="text" placeholder="Last Name"
                onChange={(e)=>{setSecondName(e.target.value)}} value={secondName} name="name2"
            >

            </input>
            <button onClick={checkRelation} data-testid="calculate_relationship">Calculate Relationship Future</button>
            <button data-testid="clear" onClick={clearAll}>Clear</button>
            <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}

export default RelationForm