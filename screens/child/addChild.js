import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import fontFamily from '../../constants/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import Hook from '../../lib/hook';
import images from '../../constants/images';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DrawerHeader from '../../component/drawerHeader';

const AddChild = ({navigation}) => {
  const [date, setDate] = useState(new Date(null));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [source, setSource] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const [kbHeight] = Hook.useKeyboard();
  const selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const uri = JSON.stringify(response.assets[0].uri);
        const source = {uri};
        console.log('response', JSON.stringify(response.assets[0].uri));
        console.log(source);
        setSource(source);
      }
    });
  };
  return (
    <>
      <DrawerHeader
        title={'Add Child'}
        backBtn={images.backBtn}
        {...navigation}
      />
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.mainContainer}>
          <View style={[styles.formView, {marginTop: kbHeight ? 50 : 50}]}>
            <Text
              style={{
                fontFamily: fontFamily.Nunito_Regular,
                textAlign: 'center',
                marginBottom: 30,
              }}>
              Enter credentials for your child
            </Text>
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
            <TouchableOpacity style={[styles.input]} onPress={showDatepicker}>
              <Text
                style={{
                  fontFamily: fontFamily.Nunito_Regular,
                  fontSize: 16,
                  color: '#707070',
                }}>
                {date != null ? date.toDateString() : 'Date Of Birth'}
              </Text>
              <Image source={images.datePick} style={styles.datePick} />
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <TouchableOpacity onPress={selectFile}>
              <View style={styles.uploadView}>
                <View style={styles.imgDiv}>
                  {source ? (
                    <Image style={{width: 100, height: 100}} source={source} />
                  ) : (
                    <Image source={images.uploadImg} />
                  )}

                  <Image source={images.camera} style={styles.cameraImage} />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.btnView}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#A884FF', '#4D4365']}
                style={styles.commonBtn}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChildAccount')}>
                  <Text style={styles.signUpText}>CONFIRM ADD CHILD</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default AddChild;
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
    justifyContent: 'center',
    alignItems: 'center',
    color: '#707070',
    position: 'relative',
  },
  multiInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  width140: {
    width: 130,
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
  datePick: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  uploadView: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDiv: {
    backgroundColor: '#E1D5FF',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'relative',
  },
  btnView: {
    marginTop: 40,
  },
  cameraImage: {
    position: 'absolute',
    top: 38,
    left: 38,
  },
});
