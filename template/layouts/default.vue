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
        <page-footer />

    </v-app>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    import { Types } from '~/store'

    import toolbar from '~/components/toolbar'
    import LeftMenu from '~/components/LeftMenu'
    import RightMenu from '~/components/RightMenu'
    import PageFooter from '~/components/Footer'

    export default {
        components: {
            toolbar,
            LeftMenu,
            RightMenu,
            PageFooter,
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
                dark: Types.states.dark,
            }),
        },
    }
</script>
