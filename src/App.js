
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [curr1,setCurr1]=useState('');
const [curr2,setCurr2]=useState('');
const [input,SetInput]=useState('');
const[result,setResult]=useState()
const [isLoading,setIsLoading]=useState(false)
function handelSetCurr1(e){
  setCurr1(e.target.value)

}

function handelSetCurr2(e){
  setCurr2(e.target.value)

}

function handelSetInput(e){
  SetInput(Number(e.target.value))

}

useEffect(function(){
async function getCall(){
if(curr2&&curr1&&input){
if(curr2===curr1){
  setResult(input)
  return
}
setIsLoading(true)
  const res= await fetch(`https://api.frankfurter.app/latest?amount=${input}&from=${curr1}&to=${curr2}`)
  const data=await res.json();
  console.log(data)
 setResult(data?.rates[curr2])
 setIsLoading(false)
  console.log(data.rates[curr2])
}


console.log(curr1,curr2,input)

}
getCall();

},[input,curr1,curr2])

  return (
    <div className="App">
          <input type="text" onChange={handelSetInput} disabled={isLoading} />
      <select onChange={handelSetCurr1} disabled={isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select  onChange={handelSetCurr2} disabled={isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT = {result} {curr2}</p>
    </div>
  );
}

export default App;
