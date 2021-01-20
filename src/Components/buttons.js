import React from "react"

function Buttons(props){
	return(
	<>
		<button id="clear" className="calc_elem button" onClick={props.clearHandle}>C</button>
        <button id="divide" className="calc_elem button" onClick={props.clickHandle} value="/">/</button>
        <button id="multiply" className="calc_elem button" onClick={props.clickHandle} value="*">x</button>
        <button id="seven" className="calc_elem button" onClick={props.clickHandle} value="7">7</button>
        <button id="eight" className="calc_elem button" onClick={props.clickHandle} value="8">8</button>
        <button id="nine" className="calc_elem button" onClick={props.clickHandle} value="9">9</button>
        <button id="subtract" className="calc_elem button" onClick={props.clickHandle} value="-">-</button>
        <button id="four" className="calc_elem button" onClick={props.clickHandle} value="4">4</button>
        <button id="five" className="calc_elem button" onClick={props.clickHandle} value="5">5</button>
        <button id="six" className="calc_elem button" onClick={props.clickHandle} value="6">6</button>
        <button id="add" className="calc_elem button" onClick={props.clickHandle} value="+">+</button>
        <button id="one" className="calc_elem button" onClick={props.clickHandle} value="1">1</button>
        <button id="two" className="calc_elem button" onClick={props.clickHandle} value="2">2</button>
        <button id="three" className="calc_elem button" onClick={props.clickHandle} value="3">3</button>
        <button id="equals" className="calc_elem" onClick={props.equalHandle}>=</button>
        <button id="zero" className="calc_elem button" onClick={props.clickHandle} value="0">0</button>
        <button id="decimal" className="calc_elem button" onClick={props.decimalHandler} value=".">.</button>
    </>
        );
};

export default Buttons