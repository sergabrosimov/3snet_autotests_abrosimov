import {defineConfig} from '@playwright/test';

export default({
    testDir: './tests',
    timeout: 60000,
    //fullyParallel: false,
    //reporter: 'html',

    use: {
        headless: true,
    },
});


