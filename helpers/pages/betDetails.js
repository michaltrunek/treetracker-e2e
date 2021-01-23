'use strict';

const { I } = inject();
const MAXIMUM_TIMEOUT = 10;

module.exports = {

    buttons: {
        shareBet: '[class*="share"]',
        frequentlyAskedQuestions: '[class*="bet-link-faq"]'
    },
    sections: {
        betTitle: '.MyBetsItemHeader-styles-title',
        betSubmissionTime: '.MyBetsItemHeader-styles-subheader',
        betHeader: '[class*="bet-header"]',
        betInfo: '[class*="MyBetsItemHeader-styles-mobile-bet-status"]',
        betStatus: '.MyBetsItemHeader-styles-mobile-bet-status',
        betList: '[class*="bet-list"]'
    },

    /**
     * Verifies bet details page for desired elements
     */
    verifyBetDetailsPage: function () {
        I.waitForVisible(this.sections.betHeader, MAXIMUM_TIMEOUT);
        I.seeElement(this.sections.betInfo);
        I.seeElement(this.sections.betStatus);
        I.seeElement(this.sections.betList);
        I.seeElement(this.buttons.shareBet);
        I.seeElement(this.buttons.frequentlyAskedQuestions);
    },
};
