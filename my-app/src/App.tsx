import "./styles/App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
