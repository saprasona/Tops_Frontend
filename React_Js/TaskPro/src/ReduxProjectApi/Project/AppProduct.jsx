import React from "react";
import ProductRedux from "./ProductRedux";
import { store } from "./Redux/app";
import { Provider } from "react-redux";

export default function AppProduct() {
  return (
    <div>
      <Provider store = {store}>
        <ProductRedux />
      </Provider>
    </div>
  );
}
