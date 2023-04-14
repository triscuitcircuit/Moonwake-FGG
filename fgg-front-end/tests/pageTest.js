require("chromedriver")
require("geckodriver")  // for testing firefox
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const {describe, before, beforeEach, after, it} = require("node:test");

// webpage comes up on 4173, not 8080
const url = "http://localhost:4173"

describe('Button Click Navigation', function() {
    // Define the web driver and set up the browser
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Navigate to the page's URL before each test case
    beforeEach(async function() {
        await driver.get(url);
        await driver.manage().window().maximize();
    });

    // Close the browser after all test cases have finished
    after(async function() {
        await driver.quit();
    });

    // Test app loads by checking tab name
    it('should have correct name', async function() {
        var title = await driver.getTitle();
        expect(title).to.equal('FGG M3');
    });

    // Test that clicking the button navigates to the expected URL
    it('should navigate to creature creator', async function() {
        // Find the button element and click it
        const button = await driver.findElement(By.css('a[href="/creature-creator"]'));
        await button.click();

        // Wait for the browser to navigate to the new page
        await driver.wait(until.urlContains("http://localhost:4173/creature-creator"), 5000);

        // Verify that the browser navigated to the expected URL
        const url = await driver.getCurrentUrl();
        expect(url).to.equal("http://localhost:4173/creature-creator");
    });

    it('should navigate to creature database', async function() {
        // Find the button element and click it
        const button = await driver.findElement(By.css('a[href="/creature-database"]'));
        await button.click();

        // Wait for the browser to navigate to the new page
        await driver.wait(until.urlContains("http://localhost:4173/creature-database"), 5000);

        // Verify that the browser navigated to the expected URL
        const url = await driver.getCurrentUrl();
        expect(url).to.equal("http://localhost:4173/creature-database");
    });

    it('should navigate to search and filter', async function() {
        // Find the button element and click it
        const button = await driver.findElement(By.css('a[href="/search_and_filter"]'));
        await button.click();

        // Wait for the browser to navigate to the new page
        await driver.wait(until.urlContains("http://localhost:4173/search_and_filter"), 5000);

        // Verify that the browser navigated to the expected URL
        const url = await driver.getCurrentUrl();
        expect(url).to.equal("http://localhost:4173/search_and_filter");
    });

    it('should navigate back to home', async function() {
        // Find the button element and click it
        const button = await driver.findElement(By.css('a[href="/search_and_filter"]'));
        await button.click();

        // Wait for the browser to navigate to the new page
        await driver.wait(until.urlContains("http://localhost:4173/search_and_filter"), 5000);

        // Verify that the browser navigated to the expected URL
        const url = await driver.getCurrentUrl();
        expect(url).to.equal("http://localhost:4173/search_and_filter");

        // back to home
        const button2 = await driver.findElement(By.css('a[href="/"]'));
        await button2.click();

        await driver.wait(until.urlContains("http://localhost:4173/"), 5000);

        const url2 = await driver.getCurrentUrl();
        expect(url2).to.equal("http://localhost:4173/");
    });

});