import Presentational from './presentional'

const Calculator = () => {
  
  const handleSum = (e) => {
    e.preventDefault()
    const num1 = Number(e.target.num1.value);
    const num2 = Number(e.target.num2.value);
    
    const sum = num1 + num2;
  }

  return(
    <>
      <Presentational />
    </>
  )
}

export default Calculator;