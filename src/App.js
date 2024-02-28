import Form from "./components/form-component/form";
import Logo from "./components/logo-component/logo";
import Packinglist from "./components/packing_list-component/packinglist";
import Stats from "./components/stats-component/stats";
import { DataProvider } from "./handlers/data-context";

function App() {
  return (
    <div className="app">
      <Logo />
      <DataProvider>
        <Form />
        <Packinglist />
        <Stats />
      </DataProvider>
    </div>
  );
}

export default App;
