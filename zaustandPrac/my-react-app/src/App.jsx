import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
// import { AlertDestructive } from "./Atom /Alert/Alert";
// import { ButtonDemo } from "./Atom /Button/Button";
// import UseSum from "./Helper/Store/UseSum";
// import TicTacToe from "./Molecules/TicTacToe/TicTacToe";
import GetUsers from "./Organizms /getUsers/GetUsers";
const queryClient = new QueryClient();
function App() {
  // const { Input, add, setValue, Value } = UseSum();
  // console.log(Input, "input value");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <input
        type="text"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={add}>Set Input Value</button>
      <h1>Input Value</h1>
      <ul>
        {Input.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
        {/* <TicTacToe /> */}
        <GetUsers />
      </QueryClientProvider>
    </>
  );
}

export default App;
