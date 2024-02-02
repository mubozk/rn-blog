import React, {createContext, useContext} from "react";

import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Context as BlogContext} from "../contexts/BlogContext";
import {Feather} from "@expo/vector-icons";

export default ShowScreen = ({navigation}) => {
    const idNo = navigation.getParam("id");
    console.log(idNo);
    const {state} = useContext(BlogContext);
    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam("id")
    );
    return (
        <View style={styles.bgStyle}>
            <Text style={styles.title}> {blogPost.title} </Text>
            <Text style={styles.content}> {blogPost.content} </Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Edit", {id: navigation.getParam("id")})
                }
            >
                <Feather name="edit" size={30} style={{marginRight: 25}}/>
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    bgStyle: {
        alignItems: "center",
    },
    title: {
        marginTop: 40,
        fontSize: 30,
        fontWeight: "bold",
        color: "blue",
        marginBottom: 15,
    },
    content: {
        fontSize: 24,
        fontWeight: "600",
        color: "grey",
    },
});
