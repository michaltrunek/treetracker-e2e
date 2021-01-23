Feature('Tree panel - fail scenario (TreeTracker)');

const {I, beforeSteps, userPanelComponent} = inject();
let treeTrackerUrl, incorrectTreeId;

BeforeSuite(( ) => {
    incorrectTreeId = '123456';
    treeTrackerUrl = 'https://treetracker.org/?treeid=300556'
});

Before(async () => {
    beforeSteps.openPage(treeTrackerUrl);
});

Scenario('Verify user panel - tree is not verified successfully', async () => {
    const treeDetails = await userPanelComponent.getTreeDetailsFromApi('300556');
    I.assertEquals(treeDetails.responseStatus, 200, 'Response status does not match!');

    I.assertEquals(treeDetails.verified, true, 'Tree is not verified!');
    I.waitForText(incorrectTreeId, 5, userPanelComponent.sections.userPanelComponent);
    I.waitForText(treeDetails.latitude, 10, userPanelComponent.sections.userPanelComponent);
    I.waitForText(treeDetails.longitude, 10, userPanelComponent.sections.userPanelComponent);
    I.waitForElement(userPanelComponent.icons.verified, 10);
    I.waitForElement(userPanelComponent.images.treeImage, 10);
    I.waitForText(treeDetails.firstName, 10, userPanelComponent.sections.userPanelComponent);
}).tag('test');
