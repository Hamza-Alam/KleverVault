import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import ProfileBar from '../../component/profileBar';
import fontFamily from '../../constants/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import images from '../../constants/images';
const ProfileUser = ({navigation}) => {
  const [firstItem, setFirstItem] = useState(0);
  const cards = [
    {price: '$426.46', title: 'Vault Title'},
    {price: '$426.45', title: 'Vault Title'},
    {price: '$426.47', title: 'Vault Title'},
  ];
  const _renderItem = ({item, index}) => {
    return (
      <View key={index}>
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
  const moveNext = () => {
    const length = cards.length;
    if (firstItem <= length) {
      setFirstItem(firstItem + 1);
      console.log(firstItem);
    }
  };
  const moveBack = () => {
    const length = cards.length;
    if (firstItem >= length) {
      setFirstItem(firstItem - 1);
      console.log(firstItem);
    } else{
      setFirstItem(firstItem - 1);
    }
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <ProfileBar name={'Selena Mark'} email={'selena@example.com'} />
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>EDIT PROFILE</Text>
        </TouchableOpacity>
        <View style={styles.sliderView}>
          <Text
            style={{
              fontFamily: fontFamily.Nunito_Bold,
              fontSize: 16,
              color: '#707070',
              textAlign: 'center',
            }}>
            My Connected Vaults
          </Text>
          <View style={styles.sliderDiv}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: '5%',
                top: '45%',
                zIndex: 9999999,
              }}
              resizeMode="cover"
              onPress={() => moveBack()}>
              <Image source={images.leftArrow} />
            </TouchableOpacity>
            <Carousel
              layout={'default'}
              data={cards}
              renderItem={_renderItem}
              sliderWidth={310}
              itemWidth={310}
              firstItem={firstItem}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              hasParallaxImages={true}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: '5%',
                top: '45%',
                zIndex: 9999999,
              }}
              resizeMode="cover"
              onPress={() => moveNext()}>
              <Image source={images.rightArrow} />
            </TouchableOpacity>
          </View>

          <View style={styles.btnView}>
            <TouchableOpacity
              style={[styles.commonBtn, {backgroundColor: '#F1EBFF'}]}>
              <Text style={styles.addVault}>ADD NEW VAULT</Text>
            </TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#A884FF', '#4D4365']}
              style={styles.commonBtn}>
              <TouchableOpacity onPress={() => navigation.navigate('AddChild')}>
                <Text style={styles.addChild}>ADD A CHILD</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default ProfileUser;
const styles = StyleSheet.create({
  pagerView: {
    height: 250,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 45,
    paddingRight: 45,
  },
  editBtn: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  editText: {
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: 14,
    color: '#A884FF',
    letterSpacing: 4,
  },
  sliderView: {
    marginTop: 50,
  },
  cardView: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    width: 305,
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
  btnView: {
    marginBottom: 20,
    marginTop: 20,
  },
  commonBtn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addChild: {
    fontSize: 16,
    fontFamily: fontFamily.Nunito_Regular,
    color: '#fff',
    textAlign: 'center',
  },
  addVault: {
    fontSize: 16,
    fontFamily: fontFamily.Nunito_Regular,
    color: '#A884FF',
    textAlign: 'center',
  },
  sliderDiv: {
    position: 'relative',
  },
});