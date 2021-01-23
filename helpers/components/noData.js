'use strict';

const {I} = inject();
const MAXIMUM_TIMEOUT = 10;

module.exports = {
    popups: {
        noData: '[class="MuiAlert-message"]'
    },

    /**
     * Verifies no data popup is displayed on the page
     */
    verifyNoDataPopup: function () {
        I.waitForElement(this.popups.noData, MAXIMUM_TIMEOUT);
        I.waitForText('Could not find any data');
    }
};
