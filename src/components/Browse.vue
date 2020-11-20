<template>
    <div id="browse">
        <Searchbar/>
        <section class="main-container">
            <Profile v-for="(profile, index) in getProfiles" :key="index" :profileData="profile"/>
        </section>
    </div>
</template>

<script>
import Searchbar from './Searchbar'
import Profile from './Profile'

export default {
    name: 'Browse',
    components: {
        Searchbar,
        Profile
    },
    computed: {
        getProfiles() {
            return this.$store.getters.get_profiles
        }
    }
}
</script>

<style scoped>
</style>