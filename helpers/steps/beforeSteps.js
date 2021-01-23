'use strict';

const { I } = inject();

module.exports = {
    /**
     * Open specific URL
     * @param {String} url - starting domain
     */
    openPage: function(url = '/') {
        I.retry({ retries: 2, minTimeout: 500 }).amOnPage(url);
    }
};