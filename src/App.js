import "./App.scss"
import {useState} from 'react';
function App() {
  const [result,setResult]=useState('');
  const [string,setString]=useState('');
  const ops = ['/','x','-','+','.'];
  const handleClick = (x)=>{
    if(ops.includes(x)&&string==''||ops.includes(x)&&ops.includes(string.slice(-1))){
      return
    }
    setString(string+x);
    if(!ops.includes(x)&&x!=='del'){
      setResult(eval(string+x).toString());
    }
  }
  const deleteL = ()=>{
    if(string == ''){
      return
    }
    setString(string.slice(0,-1));
    if(string.slice(0,-1) ==''&& result !==''){
      setResult('');
    }
  }
  const calculate = ()=>{
    setString(result)
  }
  const int = ()=>{
    let ints = [];
    for(let i = 1;i<=9;i++){
      ints.push( <button onClick={()=>handleClick(`${i}`)}key={`${i}`}>{i}</button>);
    }
    return ints
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="result">
          {result?<span>({result})</span>:''}
          {string || 0}
          </div>
        <div className="buttons">
          <div className="operators">
            <button onClick={()=>handleClick('/')} key={'/'}>/</button>
            <button onClick={()=>handleClick('*')} key={'x'}>X</button>
            <button onClick={()=>handleClick('-')} key={'-'}>-</button>
            <button onClick={()=>handleClick('+')} key={'+'}>+</button>
          </div>
          <div className='secHalf'>
            <div className='integers'>
              {int().map(int=>int)}
              <div>
                <button onClick={()=>handleClick('0')} key={'0'}>0</button>
                <button onClick={()=>handleClick('.')} key={'.'}>.</button>
              </div>
            </div>
            <div className='del-eq'>
              <button onClick={()=> deleteL()} key={'DEL'}>DEL</button>
              <button onClick={()=>calculate()} key={'='}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
