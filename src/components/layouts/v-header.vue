<template>
    <div class="v-header">
        <div v-if="!isCoreRoute"
             class="v-header__back"
             @click="goBack">
            <i class="material-icons">keyboard_arrow_left</i>
            <span>Back</span>
        </div>
        <div v-if="!isCoreRoute"
             class="v-header__user-info">
            <span>{{currentUserChat}}</span>
        </div>
        <div class="v-header__right-side"></div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'


    export default {
        name: "v-header",
        props: {},
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
        computed: {
            ...mapState([
                'currentUserChat'
            ]),
            isCoreRoute() {
             return this.$route.path === '/'
            }
        }
    }
</script>

<style scoped>

</style>