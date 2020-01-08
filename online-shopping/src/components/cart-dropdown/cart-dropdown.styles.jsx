import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid white;
  background-color: #1c1c1e;
  top: 90px;
  right: 40px;
  z-index: 5;

  &:after {
    content: '';
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    border-left: 10px solid transparent;
    position: absolute;
    right: 30px;
    top: -20px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  text-align: center;
  font-size: 25px;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    width: 15px;
    height: 15px;
    border: 1px solid black;
  }
`;
