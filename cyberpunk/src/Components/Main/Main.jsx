import React from "react";
import styles from "./Main.module.css";
import NightCity from "./NigthCity/NightCity";
import Promotion from "./Promotion/Promotion";
import Advertising from "./Advertising/Advertising";

const Main = () => {
  return (
    <main>
      <NightCity />
      <Promotion />
      <Advertising />
    </main>
  );
};

export default Main;
