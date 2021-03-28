import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Icon, CheckBox, Button} from 'native-base';

const phoneWidth = Dimensions.get('window').width;

class MenuScreen extends React.Component {
  state = {
    bbqSelected: false,
    curySelected: false,
    aigreSelected: false,
    chiliSelected: false,
    quantity: 1,
  };

  changeQuantity(value) {
    if (this.state.quantity > -1) {
      if (this.state.quantity === 1 && value === 0) {
        return;
      }
      this.setState({quantity: value});
    }
  }

  render() {
    const {navigation, route} = this.props;
    const {menu} = route.params;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: menu.image}} />

        <View style={[styles.struct, {marginTop: 20}]}>
          <View style={[styles.row]}>
            <Text style={{width: '70%'}}>{menu.title}</Text>
            <Text style={styles.grey}>{menu.price}</Text>
          </View>
          <Text style={[styles.grey, styles.mt]}>{menu.description}</Text>
        </View>

        <View style={[styles.row, styles.struct, {marginTop: 20}]}>
          <Text style={{fontWeight: 'bold'}}>
            CHOISISSEZ VOS SAUCES (SNACKBOX, KINGBOX )
          </Text>
        </View>
        <View style={[styles.struct]}>
          <TouchableOpacity
            onPress={() =>
              this.setState({bbqSelected: !this.state.bbqSelected})
            }>
            <View style={[styles.row, styles.mt, {padding: 10}]}>
              <Text>Sauce Barbecue</Text>
              <CheckBox
                checked={this.state.bbqSelected}
                color="grey"
                onPress={() =>
                  this.setState({bbqSelected: !this.state.bbqSelected})
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({curySelected: !this.state.curySelected})
            }>
            <View style={[styles.row, styles.mt, {padding: 10}]}>
              <Text>Sauce Cury</Text>
              <CheckBox
                checked={this.state.curySelected}
                color="grey"
                onPress={() =>
                  this.setState({curySelected: !this.state.curySelected})
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                aigreSelected: !this.state.aigreSelected,
              })
            }>
            <View style={[styles.row, styles.mt, {padding: 10}]}>
              <Text>Sauce Aigre-Douce</Text>
              <CheckBox
                checked={this.state.aigreSelected}
                color="grey"
                onPress={() =>
                  this.setState({
                    aigreSelected: !this.state.aigreSelected,
                  })
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                chiliSelected: !this.state.chiliSelected,
              })
            }>
            <View style={[styles.row, styles.mt, {padding: 10}]}>
              <Text>Sauce Chili Cheese</Text>
              <CheckBox
                checked={this.state.chiliSelected}
                color="grey"
                onPress={() =>
                  this.setState({
                    chiliSelected: !this.state.chiliSelected,
                  })
                }
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.struct, {marginTop: 20}]}>
          <View style={[styles.row, {justifyContent: 'space-around'}]}>
            <Icon
              name="remove-circle-outline"
              style={{color: '#0de8c2'}}
              onPress={() => this.props.decrement()}
            />
            <Text> {this.props.state}</Text>
            <Icon
              name="add-circle-outline"
              style={{color: '#0de8c2'}}
              onPress={() => this.props.increment()}
            />
          </View>
          <View
            style={[
              styles.mt,
              {
                flexDirection: 'row',
                justifyContent: 'center',
              },
            ]}>
            <Button full style={{backgroundColor: '#0de8c2', width: '85%'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Add item</Text>
            </Button>
          </View>
        </View>

        <Button style={styles.button} onPress={() => navigation.goBack()}>
          <Icon active name="close" style={[{color: '#0de8c2'}]} />
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fcf8',
  },

  struct: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'lightgrey',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: phoneWidth,
    height: 212,
  },
  mt: {
    marginTop: 10,
  },
  grey: {
    color: 'grey',
  },

  button: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: 'white',
  },
});
