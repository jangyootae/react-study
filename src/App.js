// App.js
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Message from "./components/Message";
import styled from "styled-components";

function App() {
  const [data, setData] = useState([]);
  const [edited, setEdited] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [message, setMessage] = useState("");

  const addData = (newData) => {
    if (!edited) {
      setData([...data, newData]);
      setMessage("아이템이 등록되었습니다.");
    } else {
      const updatedData = [...data];
      updatedData[editedData.index] = newData;
      setData(updatedData);
      setEdited(false);
      setMessage("아이템이 수정되었습니다.");
    }
  };

  const handleEdit = (index) => {
    setEdited(true);
    setEditedData({ index, ...data[index] });
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setMessage("아이템이 삭제되었습니다.");
  };
  const clearMessage = () => {
    setMessage("");
  };
  const handleClearList = () => {
    setData([]);
    setMessage("목록이 성공적으로 지워졌습니다.");
  };
  return (
    <Inner_box>
      <div className="all_width">
        <div>
          <Message message={message} clearMessage={clearMessage} />
        </div>
        <h2>예산 계산기</h2>

        <div className="white_box">
          <div className="div_width">
          <Form
            addData={addData}
            edited={edited}
            setEdited={setEdited}
            editedData={editedData}
          />
          <List
            data={data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleClearList={handleClearList}
          />
          </div>
        </div>
        <span>
          총지출:
          {data.reduce((total, item) => total + parseInt(item.cost), 0)}
          원
        </span>
      </div>
    </Inner_box>
  );
}
const Inner_box = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  .all_width{
    width: 80%;
  }
  .div_width{
    width: 80%;
  }
  .white_box {
    display: flex;
    justify-content: center;
    background-color: white;
  }
  span{
    display: flex;
    flex-direction: row-reverse;
  }
`;
export default App;
