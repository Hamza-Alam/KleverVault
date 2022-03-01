import React, {useState} from 'react';
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
import DrawerHeader from '../../component/drawerHeader';
import Swiper from 'react-native-swiper';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
const width = Dimensions.get('window').width;
const Dashboard = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(1);

  const Cards = [
    {id: '1', price: '$426.46', title: 'Vault 1'},
    {id: '2', price: '$426.45', title: 'Vault 2'},
    {id: '3', price: '$426.47', title: 'Vault 3'},
    {id: '4', price: '$426.45', title: 'Vault 4'},
    {id: '5', price: '$426.47', title: 'Vault 5'},
  ];
  const list = [
    {id: '1', name: 'Teressa'},
    {id: '2', name: 'Selena'},
    {id: '3', name: 'Sara'},
    {id: '4', name: 'Jackob'},
    {id: '5', name: 'Teressa'},
  ];

  const onMomentumScrollEnd = ({nativeEvent}) => {
    console.log('Hello');
    const newIndex = nativeEvent.contentOffset.x / width;
    setSelectedId(newIndex + 1);
  };
  const renderItem = (item, index) => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <View
          key={index}
          style={{
            ...styles.sliderCard,
            backgroundColor: selectedId == item.id ? '#fff' : '#F3EEFF',
          }}>
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
      </View>
    );
  };
  const listRender = ({item, index}) => {
    return (
      <View style={styles.listCard}>
        <View
          style={{
            ...styles.imgView,
            backgroundColor: selectedId == item.id ? '#A884FF' : '#fff',
          }}>
          <Image style={{width: 45, height: 45}} source={images.userImg} />
        </View>
        <Text style={{fontFamily: fontFamily.Nunito_Regular}}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <DrawerHeader title={'Children'} />
      <View style={styles.sliderView}>
        {/* ..........Swiper ............ */}

        <Swiper
          removeClippedSubviews={false}
          automaticallyAdjustContentInsets={true}
          autoplay={false}
          showsPagination={false}
          loop={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          index={0}>
          {Cards.map(renderItem)}
        </Swiper>
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
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  sliderView: {
    width: '100%',
    height: '60%',
    marginTop: 10,
  },
  cardView: {
    height: 120,
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
    padding: 20,
    borderRadius: 30,
    width: ITEM_WIDTH,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imgView: {
    width: 50,
    height: 50,
    // backgroundColor: '#A884FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatSliderView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
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
