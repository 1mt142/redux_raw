import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import HooksIceCream from "./components/HooksIceCream";
// import IceCreamContainer from "./components/IceCreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer />
        <ItemContainer cake /> */}
        <UsersContainer />
        {/* <CakeContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
        <HooksIceCream />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
