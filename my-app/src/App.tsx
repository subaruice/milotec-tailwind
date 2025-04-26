import "./styles/App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );
}

export default App;
