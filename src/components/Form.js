import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Form = ({ addData, edited, setEdited, editedData }) => {
  const [name, setName] = useState(edited ? editedData.name : "");
  const [cost, setCost] = useState(edited ? editedData.cost : "");
  useEffect(() => {
    if (edited) {
      setName(editedData.name);
      setCost(editedData.cost);
    } else {
      setName("");
      setCost("");
    }
  }, [edited, editedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { name, cost };
    addData(newData);
    setName("");
    setCost("");
    setEdited(false);
  };

  return (
    <Form_box>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            지출 항목
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            비용
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">{edited ? "수정" : "제출"}</button>
      </form>
    </Form_box>
  );
};
const Form_box = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  input {
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }

  button {
    margin-top: 10px;
  }
`;
export default Form;
