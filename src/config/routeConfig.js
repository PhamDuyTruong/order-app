import { lazy } from "react";
import {Redirect} from 'react-router-dom';

import {PATH_NAMES} from '../constants/routes';

const Home = lazy(() => import("../Pages/Home"));
const Shop = lazy(() => import("../Pages/Shop"));
const Detail = lazy(() => import("../Pages/Detail"));
const NotFound = lazy(() => import("../Components/NotFound"));
const FAQ = lazy(() => import("../Components/FAQ"));
const About = lazy(() => import("../Components/About"));
const Privacy = lazy(() => import("../Components/Privacy"));
const Term = lazy(() => import("../Components/Terms"));
const Disclaimer = lazy(() => import("../Components/Disclaimer"))

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
        exact: true,
        path: PATH_NAMES.FAQ,
        component: FAQ
    },
    {
        exact: true,
        path: PATH_NAMES.ABOUT,
        component: About
    },
    {
        exact: true,
        path: PATH_NAMES.PRIVACY,
        component: Privacy
    },
    {
        exact: true,
        path: PATH_NAMES.TERM,
        component: Term
    },
    {
        exact: true,
        path: PATH_NAMES.DISCLAIMER,
        component: Disclaimer
    },
    {
        component: NotFound
    }
];

export default RoutesConfig;