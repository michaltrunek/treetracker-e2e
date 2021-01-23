Feature('Tree panel (TreeTracker)');

const { I, beforeSteps, userPanelComponent, noDataComponent } = inject();
let treeTrackerUrl, treeId, incorrectTreeId, treeTrackerIncorrectUrl;

BeforeSuite(( ) => {
    treeId = '300556';
    incorrectTreeId = '123456456';
    treeTrackerUrl = `https://treetracker.org/?treeid=${treeId}`;
    treeTrackerIncorrectUrl = `https://treetracker.org/?treeid=${incorrectTreeId}`;
});

Scenario('Verify user panel - tree exists and is verified successfully', {retries: 2}, async () => {
    beforeSteps.openPage(treeTrackerUrl);
    const treeDetails = await userPanelComponent.getTreeDetailsFromApi(treeId);
    I.assertEquals(treeDetails.responseStatus, 200, 'Response status does not match!');

    userPanelComponent.verifyTreeDetails(treeDetails);
}).tag('test');

Scenario('Verify user panel - tree does not exist', async () => {
    beforeSteps.openPage(treeTrackerIncorrectUrl);
    //const treeDetails = await userPanelComponent.getTreeDetailsFromApi(incorrectTreeId);
    //I.assertEquals(treeDetails.responseStatus, 404, 'Response status does not match!');
    noDataComponent.verifyNoDataPopup();
}).tag('test');
