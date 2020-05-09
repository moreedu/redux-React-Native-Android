import * as React from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Product,
  ProductTitle,
  ProductImage,
  ProductPrice,
  ProductAmount,
  ProductAmountText,
  AddButton,
  AddButtonText,
  ViewSpace,
  ViewCart,
  CartButton,
  TextCart,
} from './styles';

class Main extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  navigateToCarts = () => {
    const { navigation } = this.props;
    navigation.navigate('Carrinho');
  };

  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{formatPrice(item.price)}</ProductPrice>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="plus" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    const { cartSize } = this.props;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={(item) => String(item.id)}
          renderItem={this.renderProduct}
        />
        <ViewSpace>
          <Text> ....................... </Text>
        </ViewSpace>

        <ViewCart>
          <CartButton onPress={() => this.navigateToCarts()}>
            <ProductAmount>
              <Icon name="plus" color="#FFF" size={20} />
              <ProductAmountText>{cartSize || 0}</ProductAmountText>
            </ProductAmount>
            <TextCart>CARRINHO - ITENS</TextCart>
          </CartButton>
        </ViewCart>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  cartSize: state.cart.lenght,
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
