import AppRouter from "./AppRouter";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navigation />
            <AppRouter />
        </div>
    );
}

export default App;
