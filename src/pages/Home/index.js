import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, LoadingList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const amount = useSelector(state =>
    state.cart.reduce((amounts, product) => {
      amounts[product.id] = product.amount;

      return amounts;
    }, {})
  );

  const dispatch = useDispatch();

  async function loadProducts() {
    setLoading(true);

    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));

    setLoading(false);

    setProducts(data);
  }

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {loading && (
        <LoadingList loading={loading}>
          <FaSpinner size={30} color="#fff" />
        </LoadingList>
      )}
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{' '}
                {amount[product.id] || 0}
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
}
