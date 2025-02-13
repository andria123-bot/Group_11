import handleSum from './Calculator/handleSum'

const Presentational = ( {handleSum} ) => {
  return(
    <>
      <form onClick={handleSum}>
        <input type="text" name="num1" id="" required/>
        <input type="text" name="num2" id="" required/>
        <button>Sum</button>
        <p id="sumP">Sum: {sum}</p>
      </form>
    </>
  )
}

export default Presentational