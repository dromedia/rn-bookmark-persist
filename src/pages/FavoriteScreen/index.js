import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeBookmark} from '../../redux/actions';
import {Gap, EmptyScreen} from '../../components';
import {IcFingerOff, IcFingerOn} from '../../assets';

const FavoriteScreen = ({navigation}) => {
  const {bookmarks} = useSelector(state => state.recipesReducer);
  const dispatch = useDispatch();
  const removeFromBookmarkList = recipe => dispatch(removeBookmark(recipe));
  const handleRemoveBookmark = recipe => {
    removeFromBookmarkList(recipe);
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailScreen', item)}
          activeOpacity={0.7}
          style={styles.containerFood}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.text}>{item.judul}</Text>
            <Gap height={10} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerFav}
          onPress={() => handleRemoveBookmark(item)}>
          <IcFingerOn />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.page}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}>
        {bookmarks.length === 0 ? (
          <EmptyScreen />
        ) : (
          <FlatList
            data={bookmarks}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  textInputStyle: {
    borderWidth: 0,
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    padding: 10,
    backgroundColor: 'white',
    elevation: 0,
    borderRadius: 10,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  containerFood: {
    flex: 5,
    backgroundColor: 'white',
    marginVertical: 4,
    flexDirection: 'row',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  containerFav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 4,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: 'gray',
  },
  content: {
    justifyContent: 'center',
    marginLeft: 10,
  },
});
