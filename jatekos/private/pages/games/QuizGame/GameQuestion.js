import React,{useState, useEffect, useRef} from "react";
const GameQuestion = ({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep}) => {
const [selected, setSelected] = useState('');
const [error, setError] = useState('');
const radiosWrapper =   useRef();
const ChangeHandler = (e) => {
  setSelected(e.target.value);
}


  const NextClickHandler = (e) =>{

}
return(

   <div className="card">
    <   div className="container">
            <div className="questionClass">
               <h2 className="mb-5"> {data.question}</h2>
                 <div ClassName = "control">
                   {data.choices.map((choice,i) =>(
                                        
                  <label ClassName="radio has-background-light" key ={i}>
                  <input type ="radio"  name="answer" value = {choice} onChange={ChangeHandler}/>
                  (choice)
                  </label>
                   ))}
                  
                </div>
            {error && <div className = "has-text-danger" > {error} </div>}
            <button className="button is-link is-medium is-fullwidth mt-4" onClick={NextClickHandler}>Next</button>
            </div>
        </div>
    </div>
   );

}
export default GameQuestion;