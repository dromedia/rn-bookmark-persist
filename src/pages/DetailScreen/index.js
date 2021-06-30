import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailScreen = ({navigation, route}) => {
  const [data, setData] = React.useState({});

  useEffect(() => {
    let {recipe} = route.params;
    setData(recipe);
    console.log(recipe);
  }, []);
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
