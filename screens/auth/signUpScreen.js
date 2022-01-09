import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import TopHeader from '../../component/topHeader';
import fontFamily from '../../constants/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import Hook from '../../lib/hook';

const SignUp = ({navigation}) => {
  const [kbHeight] = Hook.useKeyboard();
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.mainContainer}>
        {kbHeight === 0 && (
          <TopHeader subText={'Fill up below text fields to register'} />
        )}

        <View style={[styles.formView, {marginTop: kbHeight ? 80 : 0}]}>
          <View style={styles.multiInput}>
            <TextInput
              style={[styles.input, styles.width140]}
              placeholder="First Name"
            />
            <TextInput
              style={[styles.input, styles.width140]}
              placeholder="Last Name"
            />
          </View>
          <TextInput style={[styles.input]} placeholder="Email Address" />
          <TextInput style={[styles.input]} placeholder="Password" />
          <View style={styles.btnView}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#A884FF', '#4D4365']}
              style={styles.commonBtn}>
              <TouchableOpacity>
                <Text style={styles.signUpText}>SIGN UP</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.bottomView, {marginTop: kbHeight ? 50 : 50}]}>
          <Text
            style={{
              fontFamily: fontFamily.Nunito_Bold,
              fontSize: 16,
              color: '#707070',
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 20,
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
  multiInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  width140: {
    width: 130,
  },
  btnView: {
    marginTop: 80,
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
});
