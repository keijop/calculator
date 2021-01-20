import React, {useState} from "react";
import Buttons from "./Components/buttons.js"



function App() {

  const [input, setInput] = useState(0);
  
  function decimalHandler(e){
    let regex = /\d*\.\d+$/  //input ends w digit decimal digit, test wont allow mul decimals in one number
    let regex1 = /\d*\.$/  //input ends w decimal , test wont allow multiple decimals in row
    if (regex.test(input) || regex1.test(input)) {
      setInput(input)
    }else{ 
      setInput(input+e.target.value)
    }
  };

  function clickHandle(e){
    if (input === 0 && e.target.value === "0") {  //user needs to press 0 
      setInput(0)                         //to start number w 0
    }else if(input === 0 && e.target.value === "/"){ 
      setInput(input)
    }else if(input === 0 && e.target.value === "*"){
      setInput(input)
    }else if(input === 0){              //initial placeholder 0 will be replaced by input
      setInput(e.target.value);
    }else{  
    setInput(input+e.target.value);
    }
  };

  const clearHandle = () => setInput(0)
    
  function equalHandle(){
    let regex = /[*\/\-\+]+(?=[*\/\-\+]-)/; //multiple operands in row followed by operand and "-" operand 
    let regex1 = /[*\/\-\+]+(?=[*\/\-\+])/; //multiple operands in row followed by operand
    let regex2 = /(-\d+\.*\d*)/;   // neg number ie "-" follwed by digit/s (decimal digit/s)
    let regex3 = /\.$/;           //input e w decimal symbol
    let regex4 = /\d*[*\/\-\+]-\d/;   //2 operands in a row, last one is "-" 
    let regex5 = /[\+-\/\*]$/         //input ends w openrand
    if(regex5.test(input)){
      setInput(0)
    }else if(regex.test(input)) {
      let str = input
      str.replace(regex, "")
      str.replace(regex2, "("+"$1"+")")
      setInput(eval(str))
    
    }else if (regex4.test(input)) {
      let str = input
      str.replace(regex2, "("+"$1"+")")
      setInput(eval(str))
    }else if(regex1.test(input))  {
      setInput( eval(input.replace(regex1, "")))
    }else if(regex3.test(input)){
      setInput(eval(input+0))
    }else{ 

      setInput(eval(input))
    }
  };

  return (
    <div className="App">
      <div className="calc">    
        <div id="display" className="calc_elem">{input}</div>
        <Buttons clearHandle={clearHandle} decimalHandler={decimalHandler} equalHandle={equalHandle} clickHandle={clickHandle} />
      </div>
  </div>
  );
}

export default App;
