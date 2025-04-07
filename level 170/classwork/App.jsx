import ErrorBoundary from "./ErrorBoundary";
import ErrorComponent from "./ErrorComponent";

const App = () => {
  return(
    <>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    </>
  )
}
