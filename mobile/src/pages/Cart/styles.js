import styled from 'styled-components/native';
import color from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${color.default};
  padding: 20px;
`;

export const Products = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
`;

export const Product = styled.View`
  margin: 15px 0;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
  justify-content: center;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductControls = styled.View`
  background: #eee;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px 20px;
  margin: 0px 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ProductSubTotalContainer = styled.View`
  flex: 1;
`;

export const ProductSubTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;

export const ProductsTotal = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ProductsTotalText = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const ProductsTotalValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Order = styled.TouchableOpacity`
  background: ${color.primary};
  padding: 15px;
  border-radius: 4px;
  align-items: center;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const WithoutProductsContainer = styled.View`
  padding: 15px;
`;

export const WithoutProductsText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
