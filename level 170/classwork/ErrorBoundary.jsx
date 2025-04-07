class ErrorBoundary  extends React.Component{
  constructor(props){
    super(props)
    this.state = { hasError: false}
  }

  static derivedStateFromError(error){
    return { hasError: true }
  }

  conponentDidCatch(error, errorInfo){
    console.log(`Catched An Error: ${error}. Error Info: ${errorInfo}`)
  }

  render(){
    if(this.state.hasError){
      return(
        <>
          <h1>Error Ocurred!</h1>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary