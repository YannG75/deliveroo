import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text, Icon} from 'native-base';
import {SharedElement} from 'react-navigation-shared-element';
import MenuItem from '../Components/MenuItem';
import Header from '../Components/Header';

export class DetailsScreen extends Component {
  translateY = new Animated.Value(0);

  state = {
    showBanner: false,
    showHeader: false,
  };

  static sharedElements = (route, otherNavigation, showing) => {
    // Transition element `item.${item.id}.photo` when either
    // showing or hiding this screen (coming from any route)
    const {detail} = route.params;
    return [
      {
        id: `item.${detail.id}.photo`,
        animation: 'fade',
        resize: 'stretch',
      },
    ];
  };
  componentDidMount() {
    this.translateY.addListener(({value}) => {
      if (value > 70) {
        this.setState({showHeader: true});
      } else {
        this.setState({showHeader: false});
      }
      if (value > 400) {
        this.setState({showBanner: true});
      } else {
        this.setState({showBanner: false});
      }
    });
  }

  componentWillUnmount() {
    this.translateY.removeListener(({value}) => console.log(this.translateY));
  }

  render() {
    const {navigation, route} = this.props;
    const {detail} = route.params;
    let dotsArray = [];

    for (let index = 0; index < 5; index++) {
      index !== 4
        ? dotsArray.push(
            <View key={index} style={index === 0 ? styles.dot : styles.dots} />,
          )
        : dotsArray.push(<View key={index} style={styles.miniDot} />);
    }

    return (
      <>
        <Animated.ScrollView
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.translateY,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          <Animated.View
            style={{
              height: this.translateY.interpolate({
                inputRange: [0, 180],
                outputRange: [Dimensions.get('window').height * 0.3, 0],
                extrapolate: 'clamp',
              }),
            }}>
            <SharedElement id={`item.${detail.id}.photo`}>
              <Animated.Image
                style={[styles.headerImages]}
                source={{uri: detail.url}}
              />
            </SharedElement>
          </Animated.View>
          <Header navigation={navigation} />
          <View style={{backgroundColor: 'white'}}>
            <View style={[styles.row, {marginTop: 10}]}>{dotsArray}</View>

            <View style={{padding: 10}}>
              <Text style={[styles.title]}>{detail.title}</Text>
              <Text style={[styles.small]}>{detail.describe}</Text>
              <Text style={[styles.small]}>
                <Icon
                  active
                  name="location-outline"
                  style={[{marginRight: 10}, styles.grey]}
                />
                {detail.distance}
                {detail.adresse}
                <Text style={[styles.green, styles.verySmall]}>View map</Text>
              </Text>
              <Text style={[styles.small]}>
                Choose boneless thighs to make the ultimate fried chicken. For
                the coating, we've come up with a method that results in the
                crispiest finish ever.
              </Text>
              <Image source={require('../assets/image.png')} />

              <View style={[styles.row, {marginVertical: 10}]}>
                <Image
                  style={{
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    resizeMode: 'cover',
                    alignSelf: 'flex-start',
                  }}
                  source={{
                    uri:
                      'https://i.pinimg.com/originals/8a/62/71/8a62718f74f215d6794817c644875429.png',
                  }}
                />
                <Text
                  style={{
                    color: 'darkgray',
                    width: '70%',
                    marginHorizontal: 10,
                  }}>
                  Deliver in 25- 45 min{' '}
                </Text>
                <Text style={[styles.green, styles.verySmall]}>Change</Text>
              </View>
              <View
                style={[
                  styles.row,
                  {justifyContent: 'flex-start', marginVertical: 10},
                ]}>
                <Icon
                  active
                  name="alert-circle-outline"
                  style={[{marginHorizontal: 10}, styles.grey]}
                />
                <View>
                  <Text>Restaurent info</Text>
                  <Text style={[styles.small, {color: 'darkgray'}]}>
                    Allergens and more
                  </Text>
                </View>
              </View>
            </View>
            <View style={[{backgroundColor: '#f9fcf8', padding: 10}]}>
              <Text style={[{marginBottom: 10}, styles.small]}>
                POUR LA SÉCURITÉ DE TOUS, CHAQUE COMMANDE EST PRÉPARÉE AVEC
                AMOUR EN RESPECTANT DES MESURES SANITAIRES STRICTES 😷🍔✅
              </Text>
              <Text style={[styles.title, {marginTop: 25}]}>
                LES BONS PLANS
              </Text>
            </View>
            {Items.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('Menu', {menu: item})}>
                  <MenuItem item={item} />
                </TouchableOpacity>
              );
            })}
            <View style={[{backgroundColor: '#f9fcf8', padding: 10}]}>
              <Text style={[styles.title, {marginTop: 25}]}>BEST SELLERS</Text>
            </View>
            {Items.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('Menu', {menu: item})}>
                  <MenuItem item={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </Animated.ScrollView>
        {this.state.showHeader && (
          <Animated.View
            style={[
              styles.absolute,
              {
                opacity: this.translateY.interpolate({
                  inputRange: [70, 100],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  active
                  name="arrow-back-outline"
                  style={{color: '#0de8c2', marginRight: 10}}
                />
              </TouchableOpacity>
              <Text>{detail.title}</Text>
            </View>
            <Icon name="search" style={{color: '#0de8c2'}} />
          </Animated.View>
        )}
        {this.state.showBanner && (
          <Animated.View
            style={[
              styles.banner,
              {
                transform: [
                  {
                    translateY: this.translateY.interpolate({
                      inputRange: [400, 430],
                      outputRange: [0, 70],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Banner.map((item, index) => {
                return index === 0 ? (
                  <Text
                    key={index}
                    style={[styles.white, styles.firstTextBanner]}>
                    {item.title}
                  </Text>
                ) : (
                  <Text
                    key={index}
                    style={[styles.white, {marginHorizontal: 10}]}>
                    {item.title}
                  </Text>
                );
              })}
            </ScrollView>
          </Animated.View>
        )}
      </>
    );
  }
}

const Items = [
  {
    title: 'KINGBOX 20 newggets',
    description:
      'Idéal à partager avec 20 Newggets, entre amis ou en famille !',
    image:
      'https://rs-menus-api.roocdn.com/images/d4f0caa9-f9c0-4936-853f-60110c9684dc/image.jpeg',
    price: '8.90 €',
  },
  {
    title: 'KINGBOX 10 newggets + 10 chili cheese nuggets',
    description:
      'Idéal à partager avec 10 Newggets et 10 Chili Cheese Nuggets. Entre amis ou en famille, il y en a pour tous les goûts !',
    image:
      'https://rs-menus-api.roocdn.com/images/d4f0caa9-f9c0-4936-853f-60110c9684dc/image.jpeg',
    price: '8.90 €',
  },
  {
    title: 'KINGBOX 10 onion rings + 10 chili cheese nuggets',
    description:
      'Idéal à partager avec 10 Onion Rings et 10 Chili Cheese Nuggets. Entre amis ou en famille, il y en a pour tous les goûts !',
    image:
      'https://rs-menus-api.roocdn.com/images/d4f0caa9-f9c0-4936-853f-60110c9684dc/image.jpeg',
    price: '8.90 €',
  },
  {
    title: 'KINGBOX 10 newggets + 10 onion rings',
    description:
      'Idéal à partager avec 10 Onion Rings et 10 Newggets. Entre amis ou en famille, il y en a pour tous les goûts !',
    image:
      'https://rs-menus-api.roocdn.com/images/d4f0caa9-f9c0-4936-853f-60110c9684dc/image.jpeg',
    price: '8.90 €',
  },
];
const Banner = [
  {
    title: 'LES BON PLANS',
  },
  {
    title: 'BEST SELLERS',
  },
  {
    title: 'Menus',
  },
  {
    title: 'Snacks',
  },
  {
    title: 'Menus Enfants',
  },
  {
    title: 'Burgers',
  },
];

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    paddingVertical: 10,
    flexDirection: 'row',
    zIndex: 9,
    elevation: 9,
    backgroundColor: 'white',
  },
  firstTextBanner: {
    marginHorizontal: 10,
    paddingHorizontal: 5,
    backgroundColor: '#0de8c2',
    borderRadius: 15,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    minHeight: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
    backgroundColor: 'white',
  },
  rateImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.05,
  },
  bold: {
    fontWeight: 'bold',
  },

  green: {
    color: '#0de8c2',
  },

  grey: {
    color: '#d2d9d6',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  small: {
    color: '#b3b3b3',
    fontSize: 15,
  },

  verySmall: {
    fontSize: 12,
  },

  headerButton: {},

  headerImages: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#0de8c2',
    marginHorizontal: 5,
  },

  dots: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#d2d9d6',
    marginHorizontal: 5,
  },

  miniDot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: '#d2d9d6',
    marginHorizontal: 5,
  },
});
