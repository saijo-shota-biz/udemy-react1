import React from "react";

export const IncompleteTodos = ({todos, onClickComplete, onClickDelete}) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((e, i) => (
          <li key={i}>
            <div className="list-item">
              <p className="list-title">{e}</p>
              <button onClick={() => onClickComplete(i)}>完了</button>
              <button onClick={() => onClickDelete(i)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
