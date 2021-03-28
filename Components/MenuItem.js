import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const MenuItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginRight: 15}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={[styles.text, {marginTop: 10}]}>{item.price}</Text>
      </View>
      <Image style={styles.image} source={{uri: item.image}} />
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  text: {
    color: 'grey',
  },
  image: {
    width: 100,
    height: 100,
  },
});
