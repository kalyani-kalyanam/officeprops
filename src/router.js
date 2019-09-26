import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import Login from './login';
import Register from './register';
import Search from './search';
import Details from './details';
//import Loaderpage from './Loaderpage';

import IndexHome from './index_home';
import SearchResults from './search_results';
import ViewDetails from './view_details';
import Recomonded from './recomonded';
import Shortlist from './shortlist';
import Selected from './selected';
import Chat from './chat';
class AppRouter extends React.Component{
    render(){
        return(
            <Router>
             <Route path="/" exact component={App}/>
             <Route path="/login" exact component={Login}/>
             <Route path="/register" exact component={Register}/>
             <Route path="/search" exact component={Search}/>
             <Route path="/details" exact component={Details}/>

             <Route path="/index_home" exact component={IndexHome}/>
             <Route path="/search_results" exact component={SearchResults}/>
             <Route path="/view_details" exact component={ViewDetails}/>
             <Route path="/recomonded" exact component={Recomonded}/>
             <Route path="/shortlist" exact component={Shortlist}/>
             <Route path="/selected" exact component={Selected}/>
             <Route path="/chat" exact component={Chat}/>



            </Router>
             ) ;       
            }
        }
        export default AppRouter;