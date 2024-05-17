import React from "react";

import style from "./PostCard.module.css";

function PostCard(props) {
  return (
    <>
      <div className={style.card}>
        <h1 className={style.title}>{props.cardData.title}</h1>
        <p className={style.des}>{props.cardData.body}</p>
      </div>
    </>
  );
}

export default PostCard;
