// ელემენტი რომელიც უბრალოდ Hello, World!ს აჩვენებს
const App = () => {
  return <h1>Hello, World!</h1>;
};

// root ელემენტში კომპონენტის ჩვენება
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
