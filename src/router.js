import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import routes from './routes/router';

const AppRouter = () => {
    const element = useRoutes(routes)
    return element;
};

export default AppRouter;