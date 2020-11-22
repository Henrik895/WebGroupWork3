<template>
    <div id="home">
        <Navbar/>
        <section class="main-container">
            <Post v-for="(post, index) in getPosts" :key="index" :postData="post"/>
        </section>
    </div>
</template>

<script>
import Navbar from './Navbar'
import Post from './Post'

export default {
    name: 'Home',
    components: {
        Navbar,
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