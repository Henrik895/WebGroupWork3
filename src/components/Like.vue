<template>
    <button :class="{liked: isLiked}" @click="like" type="button" class="like-button">{{likes}}</button>
</template>

<script>
export default {
    name: 'Like',
    data() {
        return {
            isLiked: false
        }
    },
    props: {
        likes: String
    },
    methods: {
        like: function() {
            this.isLiked = this.isLiked === false;
        }
    }
}
</script>

<style scoped>
.like-button {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}
</style>