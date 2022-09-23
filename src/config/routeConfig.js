import { lazy } from "react";
import {Redirect} from 'react-router-dom';

import {PATH_NAMES} from '../constants/routes';

const Home = lazy(() => import("../Pages/Home"));
const Shop = lazy(() => import("../Pages/Shop"));
const Detail = lazy(() => import("../Pages/Detail"));
const NotFound = lazy(() => import("../Components/NotFound"));

const RoutesConfig = [
    {
        exact: true,
        path: PATH_NAMES.ROOT,
        component: () => <Redirect to={PATH_NAMES.HOME} />,
      },
    {
        exact: true,
        path: PATH_NAMES.HOME,
        component: Home
    },
    {
        exact: true,
        path: PATH_NAMES.SHOP,
        component: Shop
    },
    {
        exact: true,
        path: PATH_NAMES.DETAIL,
        component: Detail
    },
    {
        component: NotFound
    }
];

export default RoutesConfig;