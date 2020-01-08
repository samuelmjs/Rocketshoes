import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  function handleNavigate(page) {
    navigation.navigate(page);
  }

  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => handleNavigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={25} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
