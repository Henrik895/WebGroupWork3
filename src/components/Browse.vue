<template>
    <div id="browse">
        <Navbar/>
        <section class="main-container">
            <Profile v-for="(profile, index) in getProfiles" :key="index" :profileData="profile"/>
        </section>
    </div>
</template>

<script>
import Navbar from './Navbar'
import Profile from './Profile'

export default {
    name: 'Browse',
    components: {
        Navbar,
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