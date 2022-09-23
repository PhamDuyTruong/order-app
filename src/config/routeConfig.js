import { Lazy } from "react";
import {Redirect} from 'react-router-dom';

import {PATH_NAMES} from '../constants/routes';

const Home = Lazy(() => import("../Pages/Home"));
const Shop = Lazy(() => import("../Pages/Shop"));
const Detail = Lazy(() => import("../Pages/Detail"));
const NotFound = Lazy(() => import("../Components/NotFound"));

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