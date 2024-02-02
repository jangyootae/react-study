import React, { Component } from 'react'
import styled from 'styled-components'
import ListItem from './ListItem';
const List = ({ data, handleEdit, handleDelete, handleClearList }) => {

  return (
    <ListBox>
      {data.map((item, index) => (
          <ListItem
            key={index}
            index={index}
            name={item.name}
            cost={item.cost}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      <button onClick={handleClearList}>목록 지우기</button>
    </ListBox>
  )
}

const ListBox = styled.div`
  
  .list_item{
    margin: 10px;
    border: 1px solid lightgray;
  }
  button{
    margin-top:10px;
  }

`;

export default List