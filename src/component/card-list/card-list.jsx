import React from "react";
import { Card } from "../card/card";
import "./card-list.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.friends.map((friend) => (
        <Card key={friend.id} friend={friend}/>
      ))}
    </div>
  );
};
