<template>
    <div id="home">
        <Searchbar/>
        <section class="main-container">
            <Post v-for="(post, index) in getPosts" :key="index" :postData="post"/>
        </section>
    </div>
</template>

<script>
import Searchbar from './Searchbar'
import Post from './Post'

export default {
    name: 'Home',
    components: {
        Searchbar,
        Post
    },
    computed: {
        getPosts: function() {
            return this.$store.getters.get_posts
        }
    }
}
</script>

<style scoped>

</style>