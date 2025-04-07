import { FirstProvider } from "./contexts/FirstContext";
import { SecondProvider } from "./contexts/SecondContext";
import ChildComponent from "./components/ChildComponent";

const App = () => {
  return (
    <FirstProvider>
      <SecondProvider>
        <ChildComponent />
      </SecondProvider>
    </FirstProvider>
  );
};

export default App;
