<template>
    <div class="post">
        <span class="post-author">
            <span class="post-author-info">
                <img :src="authorAvatar" :alt="authorName"/>
                <small>{{authorName | noJohnDoe}}</small>
            </span>
            <small>{{postTime}}</small>
        </span>
        <div v-if="postMedia !== null" class="post-image">
            <img v-if="postMedia.type === 'image'" :src="postMedia.url" :alt="postText"/>
            <video controls v-if="postMedia.type === 'video'">
                <source type="video/mp4" :src="postMedia.url">
            </video>
        </div>
        <div class="post-title">
            <h3>{{postText}}</h3>
        </div>
        <div class="post-actions">
            <Like :likes="postLikes"/>
        </div>
    </div>
</template>

<script>
import Like from './Like'

export default {
    name: 'Post',
    components: {
        Like
    },
    props: {
        postData: Object
    },
    filters: {
        noJohnDoe: function(value) {
            if (value === 'John Doe') {
                return "Paavo Pesusieni"
            } else {
                return value
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
.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 15px;
}

.post .post-author::after {
    content: "";
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin-left: 10px;
    margin-top: 10px;

}

.post .post-author .post-author-info small {
    position: absolute;
    top: 15px;
    left: 45px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title ~ .post-actions {
    padding: 10px;
}
</style>