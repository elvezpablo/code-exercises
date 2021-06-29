import styled from "styled-components";

const Button = styled.button`
  background-color: steelblue;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 3px 6px;
  color: rgb(255,255,255);    
  cursor: pointer;
  text-shadow:  1px 1px 1px rgb(0 0 0/ 30%);
`;

const OutlineButton = styled(Button)`
  color: steelblue;
  border: 1px solid steelblue;
  background-color: transparent;
  text-shadow: none;
`;

const ButtonRow = styled.div`
  display: flex;
  background-color: rgba(200,200,200, 0.3);
  display: inline-block;
  padding: 6px;
  border-radius: 3px;
  > button {
    margin-right: 6px;
  }
  > :last-child {
    margin-right: 0;
  }
`;

export {
    Button,
    OutlineButton,
    ButtonRow
}