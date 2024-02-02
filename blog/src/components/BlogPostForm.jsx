import React, {useState} from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import {TextInput} from "react-native-gesture-handler";

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.title);
    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput
                value={title}
                style={styles.input}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput
                value={content}
                style={styles.input}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Save BlogPost"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        margin: 5,
        padding: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight: "bold",
        color: "grey",
    },
});

export default BlogPostForm;