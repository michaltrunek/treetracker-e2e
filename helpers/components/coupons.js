'use strict';

const {I} = inject();
const MAXIMUM_TIMEOUT = 20;

module.exports = {

    buttons: {
        football: '[class*="CouponLink"] [href*="/all/1101"]',
        live: '[class*="CouponLink"] [href*="live"]',
        liveScore: '[class*="CouponLink"] [href*="my-livescore"]',
        liveScoreOnLivePage: '[testid="SportFilter_my-livescore"]',
        liveScoreCounterOnLivePage: '[testid="SportFilter_my-livescore"] [class*="amount"]',
        results: '[class*="CouponLink"] [href*="results"]',
        today: '[class*="CouponLink"] [href*="today"]',
        threeHours: '[class*="Coupon"] [href*="3hrs"]',
        fortyEightHours: '[class*="Coupon"] [href*="48hrs"]',
        todayFilterCount: '[class*="Coupon"] [href*="today"] [class*="count"]',
        liveFilterCount: '[class*="Coupon"] [href*="live"] [class*="count"]',
        liveScoreFilterCount: '[class*="CouponLink"] [href*="my-livescore"] [class*="count"]',
        threeHoursFilterCount: '[class*="Coupon"] [href*="3hrs"] [class*="count"]',
        fortyEightHoursFilterCount: '[class*="Coupon"] [href*="48hrs"] [class*="count"]',
        couponCounts: '[class*="CouponLinks"] [class*="count"]'
    },
    sections: {
        couponLinks: 'div[class*="CouponLinks-styles-wrapper"]'
    },

    /**
     * Check Today filter is presented in the sport bets nav tree
     */
    assertTodayFilterIsShown: function () {
        I.seeElement(this.buttons.today);
    }
};
