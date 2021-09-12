import React from "react";

export const CompleteTodos = ({todos, onClickRedo}) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((e, i) => (
          <li key={i}>
            <div className="list-item">
              <p className="list-title">{e}</p>
              <button onClick={() => onClickRedo(i)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
