import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';

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
  WithoutProductsContainer,
  WithoutProductsText,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();

  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
      priceFormatted: formatPrice(product.price),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (calcTotal, product) => calcTotal + product.price * product.amount,
        0
      )
    )
  );

  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  function removeProduct(product) {
    dispatch(removeFromCart(product.id));
  }

  return (
    <Container>
      <Products>
        {products.length ? (
          <>
            {products.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete onPress={() => removeProduct(product)}>
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.primary}
                    />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => increment(product)}>
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
          </>
        ) : (
          <WithoutProductsContainer>
            <WithoutProductsText>
              Não há produtos no carrinho :(
            </WithoutProductsText>
          </WithoutProductsContainer>
        )}
      </Products>
    </Container>
  );
}
