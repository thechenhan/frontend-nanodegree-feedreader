/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all have URL', function() {
            //loops thru all entries in allFeeds array, the variable save in entry.
            allFeeds.forEach(function(entry) {
                //the same as above, all of the enties should be defined and not 0.
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //pretty similar as above, to make sure all of the entries are good.
         it('all have name', function() {
            allFeeds.forEach(function(entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });
        });
    });



    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            /*after investigating, I found if the body has the '.menu-hidden'
             *class, it will be hidden. Therefore, I checked if there is such a
             *class to make sure it meets the requirement.
             */
            var foo = $('.menu-hidden');
            expect(foo.length).not.toBe(0);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when the menu icon is clicked', function() {
            //Simulate the click action first and to check if
            //the action meet the requirement.
            menuIcon = $('.menu-icon-link');
            menuIcon.click();//To simulate there is a click action
            var foo = $('.menu-hidden');
            expect(foo.length).toBe(0);
            menuIcon.click();
            foo = $('.menu-hidden');//assign the value agian to uodate
            expect(foo.length).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //I used beforeEach function since loadFeed is an asynchronous function.
        beforeEach(function(done) {
            //done is passed into loadFeed function, it will be called after
            //the main part of loadFeed function.
            loadFeed(0, done);
        });

        it('load at least one .entry element within the .feed container', function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        //pre-save the original entry to compare if there is any different.
        var beforeChange = $('.feed .entry');

        beforeEach(function(done) {
            loadFeed(1, done); //change it to another choice, here I took 1.
        });

        it('changes the content after a new feed is loaded', function(done) {
            expect($('.feed .entry')).not.toEqual(beforeChange);
            done();
        });

        afterEach(function(done) {
            loadFeed(0, done); //return to original status after content change has been tested.
        });
    });
}());
