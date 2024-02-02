import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Message = ({ message, clearMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 1000);

    return () => clearTimeout(timer);
  }, [message, clearMessage]);
  return (
    <M_box visible={!!message}>
      <h3 className="mes">{message}</h3>
    </M_box>
  );
};
const M_box = styled.div`
  display: none;
  background-color: green;
  padding: 10px;
  color: white;
  text-align: center;
  .mes {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ visible }) => visible && "display: block;"}
`;

export default Message;
