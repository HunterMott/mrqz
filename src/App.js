import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
