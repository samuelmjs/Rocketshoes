import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import colors from '../../styles/colors';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubTotalContainer,
  ProductSubTotal,
  ProductsTotal,
  ProductsTotalText,
  ProductsTotalValue,
  Order,
  OrderText,
} from './styles';

export default function Cart() {
  const products = useSelector(state => state.cart);
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (calcTotal, product) => calcTotal + product.price * product.amount,
        0
      )
    )
  );

  return (
    <Container>
      <Products>
        {products.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetails>
              <ProductDelete>
                <Icon name="delete-forever" size={24} color={colors.primary} />
              </ProductDelete>
            </ProductInfo>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlButton>
              <ProductAmount value="1" />
              <ProductControlButton>
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlButton>
              <ProductSubTotalContainer>
                <ProductSubTotal>{product.subtotal}</ProductSubTotal>
              </ProductSubTotalContainer>
            </ProductControls>
          </Product>
        ))}

        <ProductsTotal>
          <ProductsTotalText>Total</ProductsTotalText>
          <ProductsTotalValue>{total}</ProductsTotalValue>
        </ProductsTotal>

        <Order>
          <OrderText>Finalizar pedido</OrderText>
        </Order>
      </Products>
    </Container>
  );
}
