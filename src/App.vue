<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('fetch_user'),
    this.$store.dispatch('fetch_posts'),
    this.$store.dispatch('fetch_profiles')
  }
}
</script>

<style>
* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: #0277bd;
    color: #263238;
}

a {
    color: #40c4ff;
}

.login-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#login-container {
    background-image: url(./assets/logo.png);
    background-size: 20% auto;
    background-repeat: no-repeat;
    background-position: 15px 15px;
    min-width: 25%;
    padding: 45px 45px;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    text-align: center;
}

#login-container form div > input {
    padding: 8px 16px;
    margin: 4px 0;
}

button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}

.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
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
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 35px;
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

.like-button {
    background-image: url(./assets/like.png);
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

.profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}
.profile img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2{
    font-size: 16px;
}

.follow-button{
    background-color: #82008f;
}

.follow-button.followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}
</style>
