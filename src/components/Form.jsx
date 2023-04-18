import { useEffect } from "react";
import styled from "@emotion/styled";
import useSelectCoins from "../hooks/useSelectCoins";
import { coins } from "../data/coins";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const FormCrypto = () => {
  const [coin, SelectCoins] = useSelectCoins("Elige tu Moneda", coins);

  // Consulta a la API
  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.Data);
    };
    consultAPI();
  }, []);

  return (
    <form>
      <SelectCoins />
      {coin}
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default FormCrypto;
