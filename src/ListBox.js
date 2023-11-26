import React, { useState } from "react";
import { Button } from "./Button";
import "./ListBox.css";
export const ListBox = ({ listData }) => {
  return (
    <div className="listBox-wrapper">
      {listData?.map(({ title, id, checked }) => {
        return <Button btnName={title} key={id} />;
      })}
    </div>
  );
};
