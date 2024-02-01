import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";
import { FlatList } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="add blog post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}-{item.id}
              </Text>
              <TouchableOpacity onPress={() => console.log(item.id)}>
                <Entypo style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
