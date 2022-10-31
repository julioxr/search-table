import AppRouter from "./AppRouter";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation />
            <AppRouter />
        </div>
    );
}

export default App;
