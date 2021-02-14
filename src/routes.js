import React from 'react'
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                {/* <Route path="/detalhe"  component={Detalhe}></Route>  */}
            </Switch>
        </BrowserRouter>
    )
}



export default routes

