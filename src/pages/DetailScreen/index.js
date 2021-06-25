import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcFingerOff, IcFingerOn} from '../../assets';
import {Header, Gap} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {addBookmark, removeBookmark} from '../../redux/actions';

const DetailScreen = ({navigation, route}) => {
  const {judul, image, rating, title, ingredient, instruction, content, id} =
    route.params;
  const data = {
    judul,
    image,
    rating,
    title,
    ingredient,
    instruction,
    content,
    id,
  };
  const {bookmarks} = useSelector(state => state.recipesReducer);
  const dispatch = useDispatch();
  const removeFromBookmarkList = recipe => dispatch(removeBookmark(data));
  const addToBookmarkList = recipe => dispatch(addBookmark(data));

  const handleRemoveBookmarkList = data => {
    removeFromBookmarkList(data);
  };

  const handleAddBookmark = data => {
    addToBookmarkList(data);
  };

  const isExist = item => {
    if (bookmarks.filter(item => item.id === data.id).length > 0) {
      return true;
    }
    return false;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        title="Detail Screen"
        subTitle="Subtitle Text"
        onBack={() => navigation.goBack()}
      />
      <Gap height={30} />
      <View
        style={{
          flex: 1,
          marginTop: 20,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <Text>{data.judul}</Text>
        {isExist(data) ? (
          <TouchableOpacity onPress={() => handleRemoveBookmarkList(data)}>
            <IcFingerOn />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleAddBookmark(data)}>
            <IcFingerOff />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
