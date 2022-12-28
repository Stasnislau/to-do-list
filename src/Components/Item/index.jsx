import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../../Actions";
import Arrow from "./../../Pictures/arrow.png";
import cross from "./../../Pictures/cross.png";
import "./index.css";
const Item = (itemProps) => {
  const item = itemProps.itemProps;
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  return (
    <div className={display ? "expanded-item" : "item"}>
      <div className="header">
        {!display ? `${item.name} ${item.surname}` : "Don't forget about"}
        {!display ? (
          <button
            className="delete-button"
            type="button"
            onClick={() => {
              dispatch(
                removeNote(
                  item.id
                )
              );
            }}
          >
            <img src={cross} className="cross" alt="cross" />
          </button>
        ) : null}
      </div>
      {display ? (
        <div className="item-info">
          <div className="item-name">
            Name: <b>{item.name}</b>
          </div>
          <div className="item-surname">
            Surname: <b>{item.surname}</b>
          </div>
          <div className="item-date-of-birth">
            Date: <b>{item.dateOfBirth}</b>
          </div>
        </div>
      ) : null}
      <div className="expand-button-container">
        <button
          className={display ? "expand-button" : "expand-button"}
          type="button"
          onClick={() => setDisplay(!display)}
        >
          <img
            src={Arrow}
            className={display ? "arrow to-be-expanded" : "arrow expanded"}
            alt="arrow"
          />
        </button>
      </div>
    </div>
  );
};
export default Item;
