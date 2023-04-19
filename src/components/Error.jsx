import React from "react";
import styled from "@emotion/styled";

const TextError = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Error = ({ children }) => {
  return <TextError>{children}</TextError>;
};

export default Error;
