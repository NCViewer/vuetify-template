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
        <v-navigation-drawer
            :right="right"
            :value="showRightMenu"
            @input="updateRightMenu"
            fixed temporary>
            <v-list>
                <v-list-tile @click.native="right = !right">
                    <v-list-tile-action>
                        <v-icon light>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <!-- Footer -->
        <v-footer :fixed="fixedFooter" app>
            <v-flex px-3>
                <span v-text="`© ${ new Date().getFullYear() }`" />
            </v-flex>
        </v-footer>

    </v-app>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import toolbar from '~/components/toolbar'
    import LeftMenu from '~/components/LeftMenu'

    export default {
        components: {
            toolbar,
            LeftMenu,
        },

        data () {
            return {
                title: 'Template',
                right: true,
            }
        },

        methods: {
            ...mapMutations({
                setRightMenu: 'SET_showRightMenu',
            }),
            updateRightMenu (state) { if (!state) this.setRightMenu(false) },
        },

        computed: {
            ...mapState({
                dark: 'dark',
                showRightMenu: 'showRightMenu',
                miniMenu: 'miniMenu',
                clipMenu: 'clipMenu',
                fixedFooter: 'fixedFooter',
            }),
        },
    }
</script>
