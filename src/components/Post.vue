<template>
    <div class="post">
        <span class="post-author">
            <span class="post-author-info">
                <img :src="authorAvatar" :alt="authorName"/>
                <small>{{authorName}}</small>
            </span>
            <small>{{postTime}}</small>
        </span>
        <div v-if="postMedia !== null" class="post-image">
            <img v-if="postMedia.type === 'image'" :src="postMedia.url" :alt="postText"/>
            <video controls v-else>
                <source type="video/mp4" :src="postMedia.url">
            </video>
        </div>
        <div class="post-title">
            <h3>{{postText}}</h3>
        </div>
        <div class="post-actions">
            <button @click="like" type="button" class="like-button">{{postLikes}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    data() {
        return {
            liked: false
        }
    },
    props: {
        postData: Object
    },
    methods: {
        like: function() {
            if (this.liked === false) {
                this.liked = true
                document.getElementsByClassName("like-button")[0].classList.add("liked")
            } else {
                this.liked = false
                document.getElementsByClassName("like-button")[0].classList.remove("liked")
            }
        }
    },
    computed: {
        authorName() {
            return this.postData.author.firstname + " " + this.postData.author.lastname
        },
        authorAvatar() {
            return this.postData.author.avatar
        },
        postTime() {
            return this.postData.createTime
        },
        postText() {
            return this.postData.text
        },
        postMedia() {
            return this.postData.media
        },
        postLikes() {
            return this.postData.likes
        }
    }
}
</script>

<style scoped>
* {
    margin-top: 6%;
}
.like-button.liked {
    background-color: #01579b;
}
</style>