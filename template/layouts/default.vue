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
        <v-footer :fixed="fixedFooter" app>
            <v-flex px-3>
                <span v-text="`© ${ new Date().getFullYear() }`" />
        </v-footer>

    </v-app>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    import toolbar from '~/components/toolbar'
    import LeftMenu from '~/components/LeftMenu'
    import RightMenu from '~/components/RightMenu'

    export default {
        components: {
            toolbar,
            LeftMenu,
            RightMenu,
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
                fixedFooter: 'fixedFooter',
            }),
        },
    }
</script>
