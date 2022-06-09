import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter = () => {
    const auth = false;
    return(
        auth ? 
        <Routes>
            {privateRoutes.map(route =>
                <Route path={route.path}
                       element={<route.component/>} 
                       key={route.path} />
                )}
                <Route path={'*'} element={<Navigate replace to={RouteNames.EVENT} />} />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route path={route.path}
                       element={<route.component/>} 
                       key={route.path}/>
                )}
                <Route path={'*'} element={<Navigate replace to={RouteNames.LOGIN} />} />
        </Routes>
    )
}

export default AppRouter;