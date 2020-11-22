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
        Post,
    },
    computed: {
        getPosts: function() {
            return this.$store.getters.get_posts
        }
    }
}
</script>

<style scoped>

@media screen and (max-width: 800px) {
  .main-container {
    width: 100%;
    transition-duration: 0.5s;
  }
}

</style>