import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import fontFamily from '../constants/fontFamily';
import images from '../constants/images';

const DrawerHeader = props => {
  const {title, backBtn, navigation} = props;
  return (
    <View style={styles.mainHeader}>
      <View style={styles.drawerImg}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {backBtn ? (
            <Image style={{width: 18, height: 18}} source={backBtn} />
          ) : (
            <Image source={images.drawerIcon} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.searchImg}>
        <Image source={images.searchIcon} />
      </View>
    </View>
  );
};
export default DrawerHeader;
const styles = StyleSheet.create({
  mainHeader: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerImg: {
    width: '33.3%',
  },
  searchImg: {
    width: '33.3%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    width: '33.3%',
    textAlign: 'center',
    color: '#A884FF',
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: 20,
  },
});
