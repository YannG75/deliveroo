import React from 'react';
import {Button, Icon} from 'native-base';
import {View, StyleSheet, Dimensions} from 'react-native';

const Header = ({navigation}) => {
  return (
    <View style={[styles.header]}>
      <Button
        style={[styles.buttonRounded, {marginLeft: 15, elevation: 5}]}
        onPress={() => navigation.goBack()}>
        <Icon
          active
          name="arrow-back-outline"
          style={[styles.iconProfil, {color: '#0de8c2'}]}
        />
      </Button>
      <View style={{flexDirection: 'row'}}>
        <Button
          elevation={4}
          style={[styles.buttonRounded, {marginHorizontal: 10, elevation: 5}]}
          onPress={() => console.log('share')}>
          <Icon
            active
            name="share-social-outline"
            style={[styles.iconProfil, {color: '#0de8c2'}]}
          />
        </Button>
        <Button
          elevation={5}
          style={[styles.buttonRounded, {marginHorizontal: 20, elevation: 5}]}
          onPress={() => console.log('search')}>
          <Icon
            active
            name="search"
            style={[styles.iconProfil, {color: '#0de8c2'}]}
          />
        </Button>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    minHeight: 70,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    zIndex: 5,
  },

  iconProfil: {
    fontWeight: 'bold',
  },
  buttonRounded: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: 'white',
  },
});
