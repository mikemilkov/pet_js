<template>
    <div class="v-user-list">
        <v-user></v-user>
    </div>
</template>

<script>
    import vUser from "./v-user"

    export default {
        name: "v-user-list",
        components: {
          vUser
        },
        props: {},
        data() {
            return {}
        },
        computed: {}
    }

</script>