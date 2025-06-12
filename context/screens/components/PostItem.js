import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostItem = ({ post }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{post.title}</Text>
    <Text>{post.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PostItem;
