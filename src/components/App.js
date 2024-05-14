import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
//function toggles when state is invoked
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData);
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
//Header compo.. rendered with props {isDarkMode}, {onDarkModeClick}
//ShoppingList compo.. rendered with prop { items}
  return (
   
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;