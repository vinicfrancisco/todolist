
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const Box = styled.div`
  align-self: center;
  width: 100%;
  margin: 20px auto 0;
  padding: 20px;  
  border-radius: 5px;
  border: 1 solid #ddd;
  background: #FFF;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input` 
  width: 100%;
  height: 56px;
  position: relative;
  padding: 0px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
  font-size: 16px;
  line-height: normal;
  background-color: rgba(255, 255, 255, 0.3);
  color: #282828;
  outline: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 16px;
  width: 100%;
  height: 50px;
  padding: 0px 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background: #2c82c9;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
}
`;
export const ListBox = styled.div`
width: 100%;
display: flex;
flex-flow: column;
border: 2px solid #999999;
padding-top: 15px;
padding-bottom: 15px;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-radius: 5px;
  border: 1 solid #ddd;
  background: #fff;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ItemButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background: #FFF;
  border-color: #2c82c9;
  color: #2c82c9;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
}
`;
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 15px;
`;