import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './containers/Home';
import Login from './containers/accounts/Login';
import Pacientes from './containers/pacientes/Pacientes';
import Derivacion from './containers/pacientes/Derivacion';
import Layout from './hocs/Layout';
import PruebaComponente from './containers/PruebaComponentes';


const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/pacientes' component={Pacientes} />
                    <Route exact path='/derivacion/:id' component={Derivacion} />
                    <Route exact path='/prueba' component={PruebaComponente}/>
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;
