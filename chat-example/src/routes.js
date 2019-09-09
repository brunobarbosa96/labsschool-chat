import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Chat from "./pages/Chat";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/chat"
                    component={Chat}
                    exact
                />
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    );
}
