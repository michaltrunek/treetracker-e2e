'use strict';

const {I} = inject();
const MAXIMUM_TIMEOUT = 10;

module.exports = {

    buttons: {
        football: '[class*="CouponLink"] [href*="/all/1101"]'
    },
    sections: {
        userPanelComponent: '[class*="MuiPaper-root"][class*="elevation8"]'
    },
    images: {
        treeImage: 'img[id="tree_img"][src*="treetracker-production-images"]'
    },
    endpoints: {
        getTree: (treeId) => `https://treetracker.org/api/web/tree?tree_id=${treeId}`
    },
    icons: {
        verified: '[class="MuiSvgIcon-root"][style="color: rgb(171, 227, 143);"]'
    },

    /**
     * Get tree details
     * @param {String} treeId - ID of a tree to get
     */
    getTreeDetailsFromApi: async function (treeId) {
        const response = await I.sendGetRequest(this.endpoints.getTree(treeId));
        const { status } = response;
        const { id, lat, lon, approved, first_name } = response.data;

        return {
            responseStatus: status,
            treeId: id,
            latitude: lat,
            longitude: lon,
            verified: approved,
            firstName: first_name
        }
    },

    /**
     * Verify tree details
     * @param {Object} treeDetails
     */
    verifyTreeDetails: function (treeDetails) {
        I.assertEquals(treeDetails.verified, true, 'Tree is not verified!');
        I.waitForText(treeDetails.treeId, MAXIMUM_TIMEOUT, this.sections.userPanelComponent);
        I.waitForText(treeDetails.latitude, MAXIMUM_TIMEOUT, this.sections.userPanelComponent);
        I.waitForText(treeDetails.longitude, MAXIMUM_TIMEOUT, this.sections.userPanelComponent);
        I.waitForElement(this.icons.verified, MAXIMUM_TIMEOUT);
        I.waitForElement(this.images.treeImage, MAXIMUM_TIMEOUT);
        I.waitForText(treeDetails.firstName, MAXIMUM_TIMEOUT, this.sections.userPanelComponent);
    }
};
