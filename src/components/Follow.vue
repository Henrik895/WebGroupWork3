<template>
    <button :class="{followed: following}" @click="follow" class="follow-button">{{followingText}}</button>
</template>

<script>
export default {
    name: 'Follow',
    data() {
        return {
            following: false,
            followingText: "Follow"
        }
    },
    methods: {
        follow: function() {
            if (this.following === false) {
                this.following = true
                this.followingText = "Unfollow"
            } else {
                this.following = false
                this.followingText = "Follow"
            }
        }
    }
}
</script>

<style scoped>
.follow-button{
    background-color: #82008f;
    border: 1px solid #82008f;
}

.follow-button.followed{
    background-color: #ffffff;
    color: #82008f;
}
</style>