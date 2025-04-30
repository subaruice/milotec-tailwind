import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
    return (
       <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
        </Route>
       </Routes>
    );
};

export default AppRouter ;