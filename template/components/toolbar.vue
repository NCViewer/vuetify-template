<template>
    <v-toolbar :clipped-left="clipped"
        color="primary"
        dense dark fixed app>
        <v-toolbar-side-icon @click="toggleLeftMenu" />

        <v-toolbar-title mx-0 v-text="title" router exact :to="`/`" />

        <v-btn icon @click.stop="toggleMiniMenu">
            <v-icon v-html="miniMenu ? 'chevron_right' : 'chevron_left'" />
        </v-btn>

        <v-btn icon @click.stop="toggleClipMenu">
            <v-icon>web</v-icon>
        </v-btn>

        <v-btn icon @click.stop="toggleFixedFooter">
            <v-icon>remove</v-icon>
        </v-btn>

        <v-spacer />

        <v-btn icon @click.stop="toggleDark">
            <v-icon>invert_colors</v-icon>
        </v-btn>

        <v-btn icon @click.stop="toggleRightMenu">
            <v-icon>menu</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'

    import { Types } from '~/store'

    export default {
        name: 'toolbar',

        props: [
            'title',
        ],

        data() {
            return {

            }
        },

        methods: {
            ...mapMutations({
                toggleLeftMenu: Types.mutations.toggleLeftMenu,
                toggleRightMenu: Types.mutations.toggleRightMenu,

                toggleDark: Types.mutations.toggleDark,

                toggleMiniMenu: Types.mutations.toggleMiniMenu,
                toggleClipMenu: Types.mutations.toggleClipMenu,

                toggleFixedFooter: Types.mutations.togglefixedFooter,
            }),
        },

        computed: {
            ...mapState({
                miniMenu: Types.states.miniMenu,
                clipped: Types.states.clipMenu,
            }),
        },
    }
</script>
