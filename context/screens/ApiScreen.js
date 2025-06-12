import React, { useContext } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { ApiContext } from '../context/ApiContext';
import PostItem from '../components/PostItem';

const ApiScreen = () => {
  const { posts, getPosts, addPost, updatePost } = useContext(ApiContext);

  return (
    <View style={styles.container}>
      <Button title="GET Posts" onPress={getPosts} />
      <Button title="POST New" onPress={addPost} />
      <Button title="PUT Update First" onPress={() => updatePost(posts[0]?.id)} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});

export default ApiScreen;
