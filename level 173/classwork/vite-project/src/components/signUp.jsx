import useForm from "../hooks/useForm"


const signUp = () => {
  return(
    <>
      <form onClick={handleSubmit}>
        <h1>Sign up</h1>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="pass" />
      </form>
    </>
  )
}