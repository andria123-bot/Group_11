import Presentational from './presentional'

const Container = () => {
  const displaySum = () => {
    const p = document.getElementById("sumP");
    p.value = `Sum: ${sum}`
  }
  const handleSum = (e) => {
    e.preventDefault()
    const num1 = e.target.num1.value;
    const num2 = e.target.num2.value;
    const sum = num1 + num2
    
    displaySum(sum)
  }

  return(
    <>
      <Presentational handlesSum={handleSum} />
    </>
  )
}

export default Container