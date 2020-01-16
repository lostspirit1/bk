import React from 'react';
import {Grid, Segment, GridColumn} from 'semantic-ui-react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
//components
import Header from '../components/dashBoard/header/index';
import Menu from '../components/dashBoard/menu/index';
import Home from '../components/dashBoard/content/home';
import SignIn from '../components/signPage/index';

const AppRouter = () => (
    <BrowserRouter>
        <Grid style={{ padding:'0', margin:'0'}}>
            <Grid.Row style={{ padding:'0', margin:'0'}}>
                <Grid.Column style={{height:'100vh', width:'240px', background:'#000'}}>
                </Grid.Column>
                <Grid.Column style={{width:'calc(100% - 240px)', padding:'0'}}>
                    <Grid>
                        <Grid.Row>
                        1
                        </Grid.Row>
                        <Grid.Row>
                       2
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>     
    </BrowserRouter>
);

export default AppRouter;