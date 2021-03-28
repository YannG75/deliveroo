import React, {Component} from 'react';
import {View, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
import {Input, Icon, Text, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';

const Restaurant = [
  {
    name: 'Offers',
    image:
      'https://www.crushpixel.com/big-static15/preview4/red-sale-web-banner-pop-2116681.jpg',
  },
  {
    name: 'Grocery',
    image:
      'https://thumbs.dreamstime.com/b/shopping-paper-bag-different-groceries-dark-wooden-background-flat-lay-space-text-156220130.jpg',
  },
  {
    name: 'Breakfast',
    image:
      'https://t3.ftcdn.net/jpg/01/41/19/42/360_F_141194240_CJaLbe3x2xL8wZfrB7rsYrYLYFFYfGUi.jpg',
  },
  {
    name: 'Pizza',
    image:
      'https://www.cumanagement.com/sites/default/files/2019-09/pizza-box.jpg',
  },
  {
    name: 'Japonais',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bento-3704d07.jpg',
  },
  {
    name: 'Asiatique',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-424456_11-e56fef2.jpg',
  },
];

const deals = [
  {
    url:
      'https://blog.pizzahut.com/wp-content/uploads/2020/03/999_Postcard_R5_Option22.png',
  },
  {
    url:
      'https://www.whynotdeals.com/wp-content/uploads/2016/11/deliveroo-singapore-free-delivery-for-all-orders-promotion-3-5-45pm-22-24-nov-2016_why-not-deals-e1479771195704.jpg',
  },
  {
    url:
      'https://www.chewboom.com/wp-content/uploads/2020/01/McDonald%E2%80%99s-Welcomes-Back-2-For-5-Mix-Match-Deal-678x381.jpg',
  },
  {
    url:
      'https://cdn.winsightmedia.com/platform/files/public/800x420/boston-market-2-for-20.jpg',
  },
];

const feature = [
  {
    id: 1,
    url:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/next-level-fried-chicken-dbd69d6.jpg',
    truc: 'Free Delivery',
    title: '🐓Chicken Class By Urban Kitchens',
    note: '4.4 Very Good ',
    describe: 'American · Chicken · Fried chicken · Salads',
    distance: '4.6 km away · ',
    adresse: '1 RUE PONT DE CRETEIL · ',
    rate: 'image',
  },
  {
    id: 2,
    url:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/next-level-fried-chicken-dbd69d6.jpg',
    truc: 'Free Delivery',
    title: '🐓Chicken Class By Urban Kitchens',
    note: '4.4 Very Good ',
    describe: 'American · Chicken · Fried chicken · Salads',
    distance: '4.6 km away · ',
    adresse: '1 RUE PONT DE CRETEIL · ',
    rate: 'image',
  },
  {
    id: 3,
    url:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/next-level-fried-chicken-dbd69d6.jpg',
    truc: 'Free Delivery',
    title: '🐓Chicken Class By Urban Kitchens',
    note: '4.4 Very Good ',
    describe: 'American · Chicken · Fried chicken · Salads',
    distance: '4.6 km away · ',
    adresse: '1 RUE PONT DE CRETEIL · ',
    rate: 'image',
  },
];

export class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                borderRadius: 50,
                width: 50,
                height: 50,
                resizeMode: 'cover',
              }}
              source={{
                uri:
                  'https://i.pinimg.com/originals/8a/62/71/8a62718f74f215d6794817c644875429.png',
              }}
            />
            <View style={[styles.location, {width: '83%'}]}>
              <Text style={{color: '#d4d6d5'}}>Now</Text>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>
                Current location{' '}
                <Icon
                  active
                  name="chevron-down-outline"
                  style={[styles.iconRight, {color: '#0de8c2'}]}
                />
              </Text>
              <Button style={styles.profil}>
                <Icon
                  active
                  name="person-outline"
                  style={[styles.iconProfil, {color: '#0de8c2'}]}
                />
              </Button>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Button
              small
              rounded
              style={{backgroundColor: '#0de8c2', color: 'white'}}>
              <Text uppercase={false}>Delivery</Text>
            </Button>
            <Text style={{marginLeft: 10, color: '#0de8c2'}}>Pickup</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.search}>
              <Icon active name="search" style={styles.icon} />
              <Input placeholder="Dishes, restaurants or cuisines" />
            </View>
            <Icon
              active
              name="options-outline"
              style={[styles.iconRight, {color: '#0de8c2'}]}
            />
          </View>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <ScrollView horizontal style={{marginBottom: 12}}>
              {Restaurant.map((value, index) => (
                <View key={index} style={styles.miniScroll}>
                  <Image
                    style={styles.miniScrollImage}
                    source={{uri: value.image}}
                  />
                  <Text style={styles.miniScrollText}>{value.name}</Text>
                </View>
              ))}
            </ScrollView>

            <ScrollView horizontal style={{marginBottom: 15}}>
              {deals.map((value, index) => (
                <View key={index} style={styles.dealScroll}>
                  <Image style={styles.dealImage} source={{uri: value.url}} />
                  <Button style={styles.order}>
                    <Text uppercase={false} style={styles.orderText}>
                      Je commande
                    </Text>
                  </Button>
                </View>
              ))}
            </ScrollView>

            <Text
              style={{fontWeight: 'bold', color: '#353535', marginBottom: 15}}>
              Featured
            </Text>

            <ScrollView horizontal style={{marginBottom: 15}}>
              {feature.map((value, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('Details', {detail: value})
                  }>
                  <View style={styles.featuredScroll}>
                    <View style={{position: 'relative'}}>
                      <SharedElement id={`item.${value.id}.photo`}>
                        <Image
                          style={styles.featuredImage}
                          source={{uri: value.url}}
                        />
                      </SharedElement>
                      <Button small style={styles.truc}>
                        <Text uppercase={false} style={styles.trucText}>
                          {value.truc}
                        </Text>
                      </Button>
                      <Button rounded style={styles.time}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          40 - 60{' '}
                          <Text style={{color: '#b3b3b3', fontSize: 12}}>
                            min
                          </Text>
                        </Text>
                      </Button>
                    </View>
                    <View>
                      <Text>{value.title}</Text>
                      <View style={styles.txtFeatures}>
                        <Text style={{color: '#b3b3b3', fontSize: 15}}>
                          <Icon style={{color: '#1d9592'}} name="star" />{' '}
                          <Text style={styles.green}>{value.note}</Text>
                          {value.describe}
                        </Text>
                      </View>
                      <Text style={{color: '#b3b3b3', fontSize: 15}}>
                        {value.distance} {value.truc}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  header: {
    position: 'absolute',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    padding: 10,
    top: 0,
    elevation: 2,
  },

  bike: {
    fontSize: 60,
  },
  location: {
    marginLeft: 10,
    paddingVertical: 5,
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 15,
  },

  search: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  icon: {
    color: '#d2d8d5',
  },

  iconLeft: {
    marginRight: 10,
  },

  iconRight: {
    marginLeft: 17,
  },

  profil: {
    position: 'absolute',
    top: '20%',
    width: 55,
    height: 55,
    right: 5,
    backgroundColor: '#f9fbfa',
    borderRadius: 50,
  },

  iconProfil: {
    fontWeight: 'bold',
  },

  content: {
    paddingTop: 230,
    justifyContent: 'flex-start',
    width: '100%',
  },

  miniScroll: {
    position: 'relative',
    borderRadius: 5,
    marginHorizontal: 3,
    width: 100,
    height: 100,
  },

  miniScrollText: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    fontWeight: 'bold',
    color: 'white',
  },

  miniScrollImage: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderRadius: 5,
  },

  dealScroll: {
    position: 'relative',
    borderRadius: 5,
    marginHorizontal: 5,
  },

  dealImage: {
    resizeMode: 'cover',
    width: 380,
    height: 190,
    borderRadius: 5,
  },

  order: {
    backgroundColor: '#1ee3bb',
    position: 'absolute',
    bottom: 15,
    left: 15,
    borderRadius: 5,
  },
  orderText: {
    color: 'white',
    fontWeight: 'bold',
  },

  featuredScroll: {
    position: 'relative',
    borderRadius: 5,
    marginHorizontal: 5,
    width: 355,
  },

  featuredImage: {
    resizeMode: 'cover',
    width: 350,
    height: 190,
    borderRadius: 5,
  },

  truc: {
    position: 'absolute',
    backgroundColor: '#f04563',
    borderRadius: 5,
    top: 10,
    left: 10,
    zIndex: 10,
  },

  trucText: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtFeatures: {
    width: '90%',
  },
  time: {
    position: 'absolute',
    zIndex: 22,
    bottom: -8,
    right: 20,
    width: 100,
    backgroundColor: '#f9fbfa',
    borderRadius: 20,
  },

  green: {
    color: '#1d9592',
  },
});
