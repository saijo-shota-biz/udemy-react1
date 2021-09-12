import "./styles.css";

/**
 * 削除ボタン押下ハンドラ
 * 未完了のTODOから削除する
 * @param event ボタン押下イベント
 */
const onClickDeleteButtonListener = (event) => {
  // 未完了のTODOから削除
  const deleteTarget = event.target.parentNode.parentNode;
  getIncompleteListElement().removeChild(deleteTarget);
}

/**
 * 戻すボタン押下ハンドラ
 * 完了したTODOから削除し、未完了のTODOに追加する
 * @param event ボタン押下イベント
 */
const onClickRedoButtonListener = (event) => {
  // 完了のTODOから削除
  const redoTarget = event.target.parentNode.parentNode;
  getCompleteListElement().removeChild(redoTarget);

  // 未完了のTODOに追加
  const listItem = createIncompleteListItemElement(redoTarget.firstElementChild.firstElementChild.innerText);
  getIncompleteListElement().appendChild(listItem);
}

/**
 * 完了ボタン押下ハンドラ
 * 未完了のTODOから削除し、完了のTODOに追加する
 * @param event ボタン押下イベント
 */
const onClickCompleteButtonListener = (event) => {
  // 未完了のTODOから削除
  const completeTarget = event.target.parentNode.parentNode;
  getIncompleteListElement().removeChild(completeTarget);

  // 完了のTODOから削除
  const listItem = createCompleteListItemElement(completeTarget.firstElementChild.firstElementChild.innerText);
  getCompleteListElement().appendChild(listItem);
}

/**
 * 追加ボタン押下ハンドラ
 * 未完了のTODOに追加する
 */
const onClickAddButtonListener = () => {
  const inputElement = document
    .getElementById("add-text");
  const inputText = inputElement.value;
  inputElement.value = "";

  const listItem = createIncompleteListItemElement(inputText);
  getIncompleteListElement().appendChild(listItem);
}

/**
 * 未完了のTODOのリスト要素を取得する
 * @returns {HTMLElement} 未完了のTODOのリスト要素
 */
const getIncompleteListElement = () => document.getElementById("incomplete-list");

/**
 * 完了のTODOのリスト要素を取得する
 * @returns {HTMLElement} 完了のTODOのリスト要素
 */
const getCompleteListElement = () => document.getElementById("complete-list");

/**
 * li要素を作成する
 * @returns {HTMLLIElement} li要素
 */
const createLiElement = () => document.createElement("li");

/**
 * div要素を作成する
 * @returns {HTMLDivElement} div要素
 */
const createDivElement = () => {
  const listItemElement = document.createElement("div");
  listItemElement.className = "list-item";
  return listItemElement;
}

/**
 * p要素を作成する
 * @returns {HTMLParagraphElement} p要素
 */
const createPElement = (listTitle) => {
  const p = document.createElement("p");
  p.innerText = listTitle;
  p.className = "list-title";
  return p;
}

const buttonEventMap = {
  complete: {
    text: "完了",
    eventListener: onClickCompleteButtonListener,
  },
  delete: {
    text: "削除",
    eventListener: onClickDeleteButtonListener,
  },
  redo: {
    text: "戻す",
    eventListener: onClickRedoButtonListener
  }
}
/**
 * 引数で指定したボタンタイプのボタン要素を作成する
 * @param buttonType ボタンタイプ { complete, delete, redo }
 * @returns {HTMLButtonElement} button要素
 */
const createButtonElement = (buttonType) => {
  const button = document.createElement("button");
  const { text, eventListener } = buttonEventMap[buttonType];
  button.innerText = text;
  button.addEventListener("click", eventListener);
  return button;
}

/**
 * 引数で指定した文字列の未完了のリスト項目の要素を作成する
 * @param inputText TODOタイトル
 * @returns {HTMLLIElement} 未完了のリスト項目の要素
 */
const createIncompleteListItemElement = (inputText) => {
  const li = createLiElement();
  const div = createDivElement();
  const p = createPElement(inputText);
  const completeButton = createButtonElement("complete")
  const deleteButton = createButtonElement("delete")
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  return li;
}

/**
 * 引数で指定した文字列の完了のリスト項目の要素を作成する
 * @param inputText TODOタイトル
 * @returns {HTMLLIElement} 完了のリスト項目の要素
 */

const createCompleteListItemElement = (inputText) => {
  const li = createLiElement();
  const div = createDivElement();
  const p = createPElement(inputText);
  const redoButton = createButtonElement("redo")
  div.appendChild(p);
  div.appendChild(redoButton);
  li.appendChild(div);
  return li;
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAddButtonListener());
