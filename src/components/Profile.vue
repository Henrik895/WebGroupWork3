<template>
    <div class="profile">
        <img :src="getProfilePicture" :alt="getName">
        <h2>{{getName}}</h2>
        <Follow/>
    </div>
</template>

<script>
import Follow from './Follow'

export default {
    name: 'Profile',
    components: {
        Follow
    },
    props: {
        profileData: Object
    },
    computed: {
        getName: function() {
            return this.profileData.firstname + " " + this.profileData.lastname
        },
        getProfilePicture: function() {
            return this.profileData.avatar
        }
    }
}
</script>

<style scoped>
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
</style>