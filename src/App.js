import "./App.css";
import { AppStoreProvider } from "./AppStore/AppStoreProvider";
import { Board } from "./board";


function App() {
  return (
    <div className="App">
      <AppStoreProvider>
        <Board></Board>
      </AppStoreProvider>
    </div>
  );
} 



export default App;
