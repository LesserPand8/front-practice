import React from "react";

// childrenを受け取るための型定義
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  // user-profileからcardにクラス名を変更
  return <div className="card">{children}</div>;
}

export default Card;
