import { Lazy } from "react";
import {Redirect} from 'react-router-dom';

import {PATH_NAMES} from '../constants/routes';

const Home = Lazy(() => import("../Pages/Home"));
const NotFound = Lazy(() => import("../Components/NotFound"));

const RoutesConfig = [
    {
        exact: true,
        path: PATH_NAMES.HOME,
        component: Home
    },
    {
        component: NotFound
    }
];

export default RoutesConfig;