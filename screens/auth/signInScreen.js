import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import TopHeader from '../../component/topHeader';
import fontFamily from '../../constants/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import Hook from '../../lib/hook';
import images from '../../constants/images';

const SignIn = ({navigation}) => {
  const [kbHeight] = Hook.useKeyboard();
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.mainContainer}>
        {kbHeight === 0 && (
          <TopHeader subText={'Fill up below text fields to login'} />
        )}

        <View style={[styles.formView, {marginTop: kbHeight ? 80 : 0}]}>
          <TextInput style={[styles.input]} placeholder="Email Address" />
          <TextInput style={[styles.input]} placeholder="Password" />
          <Text style={styles.forgotText}>Forgot Password?</Text>
          <View style={styles.btnView}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#A884FF', '#4D4365']}
              style={styles.commonBtn}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.signUpText}>LOGIN</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View
          style={[
            styles.bottomView,
            {marginTop: kbHeight ? 40 : 50, marginBottom: kbHeight ? 20 : 0},
          ]}>
          <Text
            style={{
              fontFamily: fontFamily.Nunito_Bold,
              fontSize: 16,
              color: '#707070',
              marginBottom: 30,
            }}>
            OR Connect With
          </Text>
          <TouchableOpacity style={[styles.fbBtn, styles.commonSocialBtn]}>
            <Image
              style={{position: 'absolute', left: 20}}
              source={images.fbLogo}
            />
            <Text style={styles.btnText}>FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.googleBtn, styles.commonSocialBtn]}>
            <Image
              style={{position: 'absolute', left: 20}}
              source={images.googleLogo}
            />
            <Text style={styles.btnText}>GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 45,
    paddingRight: 45,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: 16,
    height: 50,
  },
  forgotText: {
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: 16,
    color: '#A884FF',
    marginBottom: 30,
    textAlign: 'center',
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
    letterSpacing: 4,
    color: '#fff',
  },
  bottomView: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: 16,
    letterSpacing: 4,
    color: '#A884FF',
    marginTop: 20,
  },
  fbBtn: {
    backgroundColor: '#4777C9',
  },
  googleBtn: {
    backgroundColor: '#FF3D00',
  },
  commonSocialBtn: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 30,
    position: 'relative',
  },
  btnText: {
    color: '#fff',
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: 16,
    letterSpacing: 4,
  },
});
