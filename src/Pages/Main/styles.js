import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #000;
  padding-top: 20px;
  padding-bottom: 80px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  padding-bottom: 5px;
  margin: 15px;
  border-radius: 4px;
  width: 300px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 14px 0px;
  margin-bottom: 14px;
`;

export const ProductAmount = styled.View`
  padding: 10px;
  background: ${darken(0.03, '#7159c0')};
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  font-size: 15px;
  margin: 0px 4px 0px 10px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin: auto;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  background: #fff;
  margin: 0px 4px;
`;

export const ViewSpace = styled.View`
  padding-top: 5px;
  padding-bottom: 40px;
  background: #000;
`;

export const CartButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  max-width: 350px;
`;

export const ViewCart = styled.View`
  padding: 20px;
  background: #7159c1;
`;

export const TextCart = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin: 0px 10px;
`;

/*

 flex: 1;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin: 0px 4px;


export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
*/
