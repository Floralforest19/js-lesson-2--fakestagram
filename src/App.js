import React from "react";
import { Route, Switch } from "react-router";
import LayoutSimple from "./components/LayoutSimple";
import StartPage from "./components/StartPage";
import ImageListPage from "./components/ImageListPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css" 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/Image/:id"
          render={(props) => {
            return (
              <LayoutSimple>
                <ImageListPage {...props} />
              </LayoutSimple>
            );
          }}
        ></Route>

        <Route path="/image-list">
          <LayoutSimple>
            <ImageListPage />
          </LayoutSimple>
        </Route>

        <Route path="/">
          <LayoutSimple>
            <h1>Hej</h1>
            <StartPage />
          </LayoutSimple>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
