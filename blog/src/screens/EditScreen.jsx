import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {Context as BlogContext} from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {
    const id = navigation.getParam("id");
    const {state, editBlogPost} = useContext(BlogContext);

    const blogPost = state.find(
        (blogPost) => blogPost.id === id
    );

    return <BlogPostForm initialValues={{title: blogPost.title, content: blogPost.content}}
                         onSubmit={(title, content) => {
                             editBlogPost(id, title, content, () => navigation.pop())
                         }}/>;
};
const styles = StyleSheet.create({
    test: {
        fontSize: 18,
    },
});
export default EditScreen;