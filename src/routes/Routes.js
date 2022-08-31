import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

import styled from "styled-components";
import RoutesConfig from '../config/routeConfig'

const Loading = styled.div`
   font-size: 1.6rem;
   font-weight: bold;
   margin: 80px 30px 30px;
`

const Routes = () => {
  return (
    <Suspense fallback={<Loading>Loading...</Loading>}>
        <Switch>
            {
                RoutesConfig.map((item, index) =>(
                    <Route 
                        key={`route-${index}`}
                        path={item.path}
                        component={item.component}
                        exact={item.exact}
                    />
                ))
            }
        </Switch>
    </Suspense>
  )
}

export default Routes