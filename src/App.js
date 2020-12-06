import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/SignIn';
 import SignUp from './pages/SignUp';
 import Browse from './pages/Browse';
 import {IsUserRedirect,ProtectedRoute} from './helpers/routes';
 import useAuthListener from './hooks/use-auth-listener';

import * as ROUTES  from './constants/routes';

const App =()=>{
    const {user}=useAuthListener();
   // console.log(user);
    return (
        <Router>
       
        
        <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
            exact
            >
            <SignIn />
        </IsUserRedirect>
        
        <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
            exact
            >
            <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse/>
        </ProtectedRoute>

        <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact
            >
            <Home />
        </IsUserRedirect>
     
    </Router>
    ); 
    
};
export default App;