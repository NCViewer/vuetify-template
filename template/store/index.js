import { toggle, set } from '../assets/js/helpers';

import * as mutationTypes from './mutation-types'
import * as states from './states'


export const Types = {
    states    : states,
    mutations : mutationTypes,
};


export const state = () => ({
    [Types.states.dark]          : false,
    [Types.states.showLeftMenu]  : true,
    [Types.states.showRightMenu] : false,
    [Types.states.miniMenu]      : false,
    [Types.states.clipMenu]      : false,
    [Types.states.fixedFooter]   : true,
});


export const mutations = {
    [ Types.mutations.setLeftMenu ]       : set(Types.states.showLeftMenu),
    [ Types.mutations.setRightMenu ]      : set(Types.states.showRightMenu),

    [ Types.mutations.toggleLeftMenu ]    : toggle(Types.states.showLeftMenu),
    [ Types.mutations.toggleRightMenu ]   : toggle(Types.states.showRightMenu),

    [ Types.mutations.toggleDark ]        : toggle(Types.states.dark),
    [ Types.mutations.toggleMiniMenu ]    : toggle(Types.states.miniMenu),
    [ Types.mutations.toggleClipMenu ]    : toggle(Types.states.clipMenu),
    [ Types.mutations.togglefixedFooter ] : toggle(Types.states.fixedFooter),
};
