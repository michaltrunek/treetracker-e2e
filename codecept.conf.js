let testFilter = process.env.testFilter;
let showScreen = process.env.npm_package_config_showscreen;
let executors = process.env.workers;
const width = 1280;
const height = 920;

/**
 * Setting Env Variables default
 */
executors = executors !== undefined ? executors : 5;

if (testFilter === undefined) testFilter = './tests/*Test.js';

exports.config = {
    tests: testFilter,
    timeout: 30000,
    output: './output',

    helpers: {
        REST: {
            resetHeaders: true,
            timeout: 15000
        },
        Puppeteer: {
            restart: true,
            fullPageScreenshots: true,
            uniqueScreenshotNames: false,
            show: showScreen === 'true',
            waitForTimeout: 35000,
            getPageTimeout: 60000,
            windowSize: `${width}x${height}`,
            chrome: {
                args: ['--no-sandbox', '--lang=en', `--window-size=${width},${height}`]
            }
        },
        MyHelper: {
            require: './helpers/customHelper/myHelper.js'
        }
    },
    include: {
        I: './steps_file.js',

        // Sports mobile pages & components

        // steps
        beforeSteps: './helpers/steps/beforeSteps.js',

        // pages
        betDetails: './helpers/pages/betDetails.js',

        // components
        userPanelComponent: './helpers/components/userPanel.js',
        noDataComponent: './helpers/components/noData.js'
    },
    multiple: {
        parallel: {
            chunks: executors
        }
    },
    name: 'treetracker-e2e-automation',
    plugins: {
        autoDelay: {
            enabled: true,
            delayBefore: 300,
            delayAfter: 500,
            methods: ["selectOption", "click", "appendField"]
        },
        allure: {
            enabled: true
        },
    }
};



