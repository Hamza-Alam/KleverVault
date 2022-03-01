import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import fontFamily from '../../constants/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import Hook from '../../lib/hook';
import images from '../../constants/images';
import ProfileBar from '../../component/profileBar';
import DrawerHeader from '../../component/drawerHeader';

const ChildAccount = ({navigation}) => {
  const [kbHeight] = Hook.useKeyboard();

  const childAccount = [
    {text: 'Tidy up bedroom including toys', price: '$1', bgColor: '#FFB334'},
    {text: 'Clean the inside of dads car', price: '$2', bgColor: '#69BB00'},
    {text: 'Put the dishes in dishwasher', price: '$2', bgColor: '#FF8181'},
    {
      text: 'Help grandma in garden with leaves',
      price: '$1',
      bgColor: '#9163FF',
    },
  ];
  const listRender = ({item, index}) => {
    return (
      <View style={styles.listCard} key={index}>
        <View style={[styles.lineBar,{backgroundColor: item.bgColor}]}></View>
        <Text style={styles.listText}>{item.text}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    );
  };

  return (
    <>
      <DrawerHeader
        title={'Child Account'}
        backBtn={images.backBtn}
        {...navigation}
      />
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.mainContainer}>
          <ProfileBar name={'Caleb Mark'} email={'12-12-2007'} />
          <View style={styles.multiBtn}>
            <TouchableOpacity
              style={styles.commonBtn}
              onPress={() => navigation.navigate('SavingAccount')}>
              <Image source={images.trading} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.commonBtn}
              onPress={() => navigation.navigate('SavingAccount')}>
              <Image source={images.board} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.commonBtn}
              onPress={() => navigation.navigate('SavingAccount')}>
              <Image source={images.moneyBank} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editText}>EDIT CALEB'S PROFILE</Text>
          </TouchableOpacity>
          <View style={styles.listView}>
            <Text
              style={{
                fontFamily: fontFamily.Nunito_Bold,
                color: '#707070',
                fontSize: 16,
                textAlign: 'center',
                marginBottom: 20,
              }}>
              Chores List
            </Text>
            <View style={styles.listMulti}>
              <FlatList
                data={childAccount}
                renderItem={listRender}
                keyExtractor={item => item.id}
              />
              {/* <View style={styles.listCard}>
                <View
                  style={[styles.lineBar, {backgroundColor: '#FFB334'}]}></View>
                <Text style={styles.listText}>
                  Tidy up bedroom including toys
                </Text>
                <Text style={styles.priceText}>$1</Text>
              </View>
              <View style={styles.listCard}>
                <View
                  style={[styles.lineBar, {backgroundColor: '#69BB00'}]}></View>
                <Text style={styles.listText}>
                  Clean the inside of dad's car
                </Text>
                <Text style={styles.priceText}>$2</Text>
              </View>
              <View style={styles.listCard}>
                <View
                  style={[styles.lineBar, {backgroundColor: '#FF8181'}]}></View>
                <Text style={styles.listText}>
                  Put the dishes in dishwasher
                </Text>
                <Text style={styles.priceText}>$2</Text>
              </View>
              <View style={styles.listCard}>
                <View
                  style={[styles.lineBar, {backgroundColor: '#9163FF'}]}></View>
                <Text style={styles.listText}>
                  Help grandma in garden with leaves
                </Text>
                <Text style={styles.priceText}>$2</Text>
              </View> */}
            </View>
            <View style={styles.btnView}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#A884FF', '#4D4365']}
                style={styles.common}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChildAccount')}>
                  <Text style={styles.signUpText}>ADD CHORE WIT REWARD</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default ChildAccount;
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingLeft: 45,
    paddingRight: 45,
  },
  multiBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  commonBtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F5FF',
    borderRadius: 15,
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
    marginTop: 20,
    marginBottom: 20,
  },
  editText: {
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: 14,
    color: '#A884FF',
  },
  listCard: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: '#F8F5FF',
    padding: 15,
    borderRadius: 15,
    position: 'relative',
    marginBottom: 20,
  },
  lineBar: {
    width: 3,
    height: 20,
    borderRadius: 15,
    marginRight: 15,
  },
  priceText: {
    fontSize: 14,
    fontFamily: fontFamily.Nunito_Bold,
    color: '#A884FF',
    position: 'absolute',
    right: 15,
    top: 15,
  },
  listText: {
    fontSize: 14,
    fontFamily: fontFamily.Nunito_Regular,
    color: '#707070',
  },
  common: {
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
