import React from "react";
import Navbar from "../Navigation Bar/Navbar";

function CakeRolls() {
  return (
    <>
      <Navbar
        menus={{
          menu1: "Home",
        }}
      />
      <div>
        <p style={{ textAlign: "center" }}>
          Sorry,we're out of stock right now..
        </p>
      </div>
    </>
  );
}

export default CakeRolls;
