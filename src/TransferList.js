import { ArrowButton } from "./ArrowButton";
import { ListBox } from "./ListBox";
import "./TransferList.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { data } from "./data";
import { useState } from "react";
export const TransferList = () => {
  const [leftListData, setLeftListData] = useState(data);
  const [rightListData, setRightListData] = useState([]);
  return (
    <div className="transferList-wrapper">
      <ListBox listData={leftListData} />
      <div className="btns-wrapper">
        <ArrowButton arrow={<FaArrowRight />} />
        <ArrowButton arrow={<FaArrowLeft />} />
      </div>
      <ListBox listData={rightListData}/>
    </div>
  );
};
