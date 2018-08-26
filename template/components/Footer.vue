<template>
    <v-footer :fixed="fixedFooter" :dark="!dark" app>
        <v-flex px-3>
            <span v-text="`© ${ year }`" />
        </v-flex>
    </v-footer>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Footer',

        data() {
            return {
                year: new Date().getFullYear()
            }
        },

        computed: {
            ...mapState({
                dark: 'dark',
                fixedFooter: 'fixedFooter',
            }),
        },
    }
</script>
