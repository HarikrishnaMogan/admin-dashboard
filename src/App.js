import Navbar from "./components/Navbar";
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Charts from "./components/charts";
import Home from "./components/Home";
import Button from "./components/buttons";
import Cards from "./components/Cards";
import Animation from "./components/Utilities/animations";
import Borders from "./components/Utilities/Borders";
import colors from "./components/Utilities/colors";
import Other from "./components/Utilities/other";
import Unavailable from "./components/Pages/404";
import Blank from "./components/Pages/blank";
import Forgotpassword from "./components/Pages/forgotpassword";
import Login from "./components/Pages/login";
import Register from "./components/Pages/Register";
import Scrolltop from "./components/scrolltop";
import Table from "./components/table";
import React from "react";



//conditionaly render the header,navbar,footer,scrolltop button
function ConditionalRoute({path,component:Component})
{
    return <Route path={path} render={({location})=>{
       return (location.pathname ==="/login"||location.pathname ==="/forgotpassword"
         || location.pathname==="/register"
        ? <></> : <Component />);
    }} />
}
class App extends React.Component
{
  
    render()
    {
    return(
        <>
        <BrowserRouter >
        <div id="page-top">
        <div id="wrapper">
        
          <ConditionalRoute path="/" component={Navbar}/>
         
         <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
         <ConditionalRoute path="/" component={Header}/>
       
         <Route exact path="/" component={Home} />
         <Route path="/button" component={Button} />
         <Route path="/cards" component={Cards} />
         <Route path="/animations" component={Animation} />
         <Route path="/borders" component={Borders} />
         <Route path="/colors" component={colors} />
         <Route path="/other" component={Other} />
         <Route path="/404" component={Unavailable} />
         <Route path="/blank" component={Blank} />
         <Route path="/table" component={Table} />
         <Route path="/charts" component={Charts}/>
    
      
         </div>
         <ConditionalRoute path="/" component={Footer}/>
        </div>
         </div>
         </div>
         <ConditionalRoute path="/" component={Scrolltop}/>
         
         <Route path="/forgotpassword" component={Forgotpassword} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
        
         </BrowserRouter>
     
        </>
    );
    }
}
export default  App;