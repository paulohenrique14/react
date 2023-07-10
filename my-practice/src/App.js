import MyName from "./components/MyName";
import MyDream from "./components/MyDream";
import Age from "./components/Age";

function App() {
  return (
    <div className="App">
      <h1>Testando componentes</h1>
      <MyName name="Paulo" />
      <MyName name="José" />
      <MyName name="Hiago" />
      <Age yearOfBirth={2003} />
      <Age yearOfBirth={2004} />
      <Age yearOfBirth={2005} />
      <MyDream profession="Developer" />
      <MyDream profession="Caminhoneiro" />
      <MyDream profession="Motociclista" />
    </div>
  );
}

export default App;
