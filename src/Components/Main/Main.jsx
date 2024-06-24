import React from "react";
import styles from "./Main.module.css";
import NightCity from "./NigthCity/NightCity";
import Promotion from "./Promotion/Promotion";
import Advertising from "./Advertising/Advertising";
import Purchase from "./Purchase/Purchase";

const Main = () => {
  return (
    <main>
      <NightCity />
      <Promotion />
      <Advertising />
      <Purchase />
    </main>
  );
};

export default Main;
