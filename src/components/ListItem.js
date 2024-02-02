import React, { useState } from 'react'
import styled from 'styled-components';

const ListItem = ({ index, name, cost, handleEdit, handleDelete }) => {
    return (
      <List_item>
        <div className='items'>
        <div>{name}</div> 
        <div>{cost}</div> 
        </div>
        <div>
        <button onClick={() => handleEdit(index)}>수정</button>
        <button onClick={() => handleDelete(index)}>삭제</button>
        </div>
      </List_item>
    );
  };
  
const List_item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 1.1rem;
  border: 1px solid lightgray;
  margin-top: 10px;
  .items {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`
export default ListItem