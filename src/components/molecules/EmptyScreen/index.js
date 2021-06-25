import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlEmptyOrder} from '../../../assets';
import {Gap} from '../..';
const EmptyScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
        }}>
        No Bookmark List
      </Text>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({});
