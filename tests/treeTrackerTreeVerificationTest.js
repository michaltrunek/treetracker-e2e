Feature('Tree panel (TreeTracker)', {retries: process.env.retries});

const {I, beforeSteps} = inject();
let treeTrackerUrl;

BeforeSuite(( ) => {
    treeTrackerUrl = 'https://treetracker.org/?treeid=300556'
});

Before(async () => {
    beforeSteps.openPage(treeTrackerUrl);
});

Scenario('Verify user panel - tree is verified successfully', {retries: 2}, async () => {
    I.wait(3);
}).tag('test');
