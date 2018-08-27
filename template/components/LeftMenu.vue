<template>
    <v-navigation-drawer
        :mini-variant.sync="miniMenu"
        :clipped="clipMenu"
        :value = "showLeftMenu"
        @input="updateLeftMenu"
        fixed app>
        <v-list>
            <v-list-tile
                :to="item.to"
                v-for="(item, i) in items"
                :key="i"
                router exact>

                <v-list-tile-action>
                    <v-icon v-html="item.icon" />
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title" />
                </v-list-tile-content>

            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'

    import { Types } from '~/store'

    export default {
        name: 'LeftMenu',

        data() {
            return {
                items: [
                    { icon: 'apps', title: 'Welcome', to: '/' },
                    { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
                ],
            }
        },

        methods: {
            ...mapMutations({
                setLeftMenu: Types.mutations.setLeftMenu,
            }),
            updateLeftMenu (state) { if (!state) this.setLeftMenu(false) },
        },

        computed: {
            ...mapState({
                showLeftMenu: Types.states.showLeftMenu,
                miniMenu: Types.states.miniMenu,
                clipMenu: Types.states.clipMenu,
            }),
        },
    }
</script>
