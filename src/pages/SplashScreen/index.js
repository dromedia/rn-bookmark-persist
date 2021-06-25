import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';
import {COLORS, SIZES, FONTS} from '../../config';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  });

  return (
    <View style={styles.page}>
      <Logo />
      <Gap height={10} />
      <Text style={styles.text}>Dromedia</Text>
      <Gap height={20} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    ...FONTS.body2,
  },
});
