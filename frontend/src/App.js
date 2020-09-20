import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pacientes from './containers/pacientes/Pacientes';
import pacienteDetalle from './containers/pacientes/PacienteDetalle';

import PruebaDeComponentes from './components/PruebaDeComponentes';
import Home from './containers/Home';
import Login from './containers/accounts/Login';
import Signup  from './containers/accounts/Signup';
import Activate from './containers/accounts/Activate';
import ResetPassword from './containers/accounts/ResetPassword';
import ResetPasswordConfirm from './containers/accounts/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './hocs/Layout';


const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/pacientes' component={Pacientes} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route path='/pacientes/:id' component={pacienteDetalle} />
                    <Route path='/prueba' component={PruebaDeComponentes} />
                </Switch>
            </Layout>

        </Router>
    </Provider>
);


export default App;
