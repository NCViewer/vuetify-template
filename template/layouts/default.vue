<template>
    <v-app :dark="dark">

        <!-- Left Nav -->
        <left-menu />

        <!-- Toolbar -->
        <toolbar :title="title" />

        <!-- Content -->
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>

        <!-- Right Nav -->
        <right-menu />

        <!-- Footer -->
        <footer />

    </v-app>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    import toolbar from '~/components/toolbar'
    import LeftMenu from '~/components/LeftMenu'
    import RightMenu from '~/components/RightMenu'
    import Footer from '~/components/Footer'

    export default {
        components: {
            toolbar,
            LeftMenu,
            RightMenu,
            Footer,
        },

        data () {
            return {
                title: 'Template',
            }
        },

        methods: {

        },

        computed: {
            ...mapState({
                dark: 'dark',
            }),
        },
    }
</script>
