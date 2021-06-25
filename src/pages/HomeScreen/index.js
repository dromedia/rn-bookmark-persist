import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcFingerOff, IcFingerOn} from '../../assets';
import {Gap} from '../../components';
import {addBookmark, getRecipes, removeBookmark} from '../../redux/actions';

const HomeScreen = ({navigation}) => {
  const {recipes, bookmarks} = useSelector(state => state.recipesReducer);
  const dispatch = useDispatch();
  const addToBookmarkList = recipe => dispatch(addBookmark(recipe));
  const removeFromBookmarkList = recipe => dispatch(removeBookmark(recipe));

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const handleAddBookmark = recipe => {
    addToBookmarkList(recipe);
  };

  const handleRemoveBookmark = recipe => {
    removeFromBookmarkList(recipe);
  };

  const isExist = recipe => {
    if (bookmarks.filter(item => item.id === recipe.id).length > 0) {
      return true;
    }
    return false;
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
        {isExist(item) ? (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.containerFav}
            onPress={() => handleRemoveBookmark(item)}>
            <IcFingerOn />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.containerFav}
            onPress={() => handleAddBookmark(item)}>
            <IcFingerOff />
          </TouchableOpacity>
        )}
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
        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={recipes}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
