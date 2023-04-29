import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
//const NewAuthLogin=Loadable(lazy(()=>import('pages/authentication/NewLoginDialog')))
const SipCalculator=Loadable(lazy(() => import('pages/calculators/SipCalculator')));
const FdCalculator=Loadable(lazy(() => import('pages/calculators/FdCacculator')));
const FdItem=Loadable(lazy(() => import('pages/menuPages/fd')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        },
        {
            path: 'sipCalculator',
            element: <SipCalculator />
        },
        {
            path: 'fdCalculator',
            element: <FdCalculator />
        },
        {
            path: 'fixedDeposit',
            element: <FdItem />
        }
    ]
};

export default LoginRoutes;
