<template>
    <v-footer :fixed="fixedFooter" dark app>
        <v-flex px-3>
            <span v-text="`© ${ year }`"></span>
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
                fixedFooter: 'fixedFooter',
            }),
        },
    }
</script>
