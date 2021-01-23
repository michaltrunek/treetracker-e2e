Feature('Tree panel (TreeTracker)');

const {I, beforeSteps} = inject();
let treeTrackerUrl;

BeforeSuite(( ) => {
    treeTrackerUrl = 'https://treetracker.org/?treeid=300556'
});

Before(async () => {
    beforeSteps.openPage(treeTrackerUrl);
});

Scenario('Verify user panel - tree is verified successfully', {retries: 2}, async () => {
    const response = await I.sendGetRequest('https://treetracker.org/api/web/tree?tree_id=300556');
    const { id, lat, lon, approved, first_name  } = response.data;

    I.assertEquals(response.status, 200, 'Response status does not match!');
    I.assertEquals(approved, true, 'Tree is not verified!');
    I.waitForText(id, 10, '[class*="MuiPaper-root"][class*="elevation8"]');
    I.waitForText(lat, 10, '[class*="MuiPaper-root"][class*="elevation8"]');
    I.waitForText(lon, 10, '[class*="MuiPaper-root"][class*="elevation8"]');
    I.waitForElement('[class="MuiSvgIcon-root"][style="color: rgb(171, 227, 143);"]', 10);
    I.waitForElement('img[id="tree_img"][src*="treetracker-production-images"]', 10);
    I.waitForText(first_name, 10, '[class*="MuiPaper-root"][class*="elevation8"]');
}).tag('test');
