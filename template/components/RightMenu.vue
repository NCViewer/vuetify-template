<template>
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
</template>

<script>
    import { mapMutations, mapState } from 'vuex'

    export default {
        name: 'RightMenu',

        data() {
            return {
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
                showRightMenu: 'showRightMenu',
                clipMenu: 'clipMenu',
            }),
        },
    }
</script>
