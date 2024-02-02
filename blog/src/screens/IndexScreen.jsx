import React, {useContext} from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../contexts/BlogContext";
import {FlatList} from "react-native-gesture-handler";
import {Entypo} from "@expo/vector-icons";
import {Feather} from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(BlogContext);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Show", {id: item.id})}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title}-{item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Entypo style={styles.icon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" size={30} style={{marginRight: 25}}/>
            </TouchableOpacity>
        ),
    };
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
