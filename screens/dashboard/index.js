import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ProfileBar from '../../component/profileBar';
import LinearGradient from 'react-native-linear-gradient';
import fontFamily from '../../constants/fontFamily';
import Carousel from 'react-native-snap-carousel';
import images from '../../constants/images';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const Dashboard = ({navigation}) => {
  const cards = [
    {price: '$426.46', title: 'Vault Title'},
    {price: '$426.45', title: 'Vault Title'},
    {price: '$426.47', title: 'Vault Title'},
  ];
  const list = [
    {name: 'Teressa'},
    {name: 'Selena'},
    {name: 'Sara'},
    {name: 'Jackob'},
    {name: 'Teressa'},
  ];
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.sliderCard}>
        <ProfileBar name={'Selena Mark'} email={'selena@example.com'} />
        <LinearGradient
          style={styles.cardView}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F9D9FF', '#FFF3CC']}>
          <View>
            <Text style={styles.priceText}>{item.price}</Text>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        </LinearGradient>
      </View>
    );
  };
  const listRender = ({item, index}) => {
    return (
      <View style={styles.listCard}>
        <View style={styles.imgView}>
          <Image style={{width: 45, height: 45}} source={images.userImg} />
        </View>
        <Text style={{fontFamily: fontFamily.Nunito_Regular}}>{item.name}</Text>
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.mainContainer}>
        <View style={styles.sliderView}>
          <Carousel
            layout={'default'}
            data={cards}
            renderItem={renderItem}
            sliderWidth={CARD_WIDTH}
            itemWidth={CARD_WIDTH}
            hasParallaxImages={true}
            useScrollView={true}
            loop={true}
          />
        </View>
        <View style={styles.flatSliderView}>
          <FlatList
            data={list}
            renderItem={listRender}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <View style={styles.btnView}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#A884FF', '#4D4365']}
            style={styles.commonBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')}>
              <Text style={styles.signUpText}>ADD A CHILD</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },

  sliderView: {
    marginTop: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    resizeMode: 'center',
  },
  priceText: {
    fontSize: 30,
    fontFamily: fontFamily.Nunito_Bold,
    color: '#A884FF',
    textAlign: 'center',
    marginBottom: 17,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fontFamily.Nunito_Regular,
    color: '#707070',
    textAlign: 'center',
  },
  sliderCard: {
    backgroundColor: '#F3EEFF',
    padding: 20,
    borderRadius: 30,
    width: CARD_WIDTH,
    height:450
  },
  imgView: {
    width: 50,
    height: 50,
    backgroundColor: '#A884FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatSliderView: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listCard: {
    marginLeft: 10,
    marginRight: 10,
  },
  btnView: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30,
  },

  commonBtn: {
    elevation: 5,
    height: 50,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  signUpText: {
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: 16,
    color: '#fff',
  },
});
