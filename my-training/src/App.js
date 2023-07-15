import Forms from "./components/Forms";

function App() {
  return (
    <div className="App">
      <h1>Olá, react</h1>
      <h2>Avançando no ReactJS</h2>
      <Forms
        user={{ name: "Josias", age: 19, dream: "Became a race car pilot" }}
      />
      <Forms />
      <Forms
        user={{ name: "Josias", age: 19, dream: "Became a race car pilot" }}
      />
    </div>
  );
}

export default App;
