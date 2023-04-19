import React from "react";
import styled from "@emotion/styled";

const P = styled.p`
  color: #fff;
`;
const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  console.log(result);
  return (
    <div>
      <P>
        El Precio es de <span>{PRICE}</span>{" "}
      </P>
      <P>
        El Precio más alto del día: <span>{HIGHDAY}</span>{" "}
      </P>
      <P>
        El Precio más bajo del día: <span>{LOWDAY}</span>{" "}
      </P>
      <P>
        Variación últimas 24hrs:<span>{CHANGEPCT24HOUR}</span>{" "}
      </P>
      <P>
        Última Actualización: <span>{LASTUPDATE}</span>{" "}
      </P>
    </div>
  );
};

export default Result;
