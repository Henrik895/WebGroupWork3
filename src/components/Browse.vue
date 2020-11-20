<template>
    <div id="browse">
        <Searchbar/>
        <section class="main-container"></section>
    </div>
</template>

<script>
import Searchbar from './Searchbar'
export default {
    name: 'Browse',
    components: {
        Searchbar
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