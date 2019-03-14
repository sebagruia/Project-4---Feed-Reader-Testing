/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {



    describe('RSS Feeds', function () {
        /*  This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('allFeeds variable is defined and not empty', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test ensures that each feed
         in the allFeeds object has a URL defined
         and that the URL is not empty.
         */
        it('Url should be defined and not empty', function () {

            for (feeds of allFeeds) {
                expect(feeds.url).toBeDefined();
                expect(feeds.url).not.toBe('');
            }
        });



        /* This Test ensures that each feed
         * in the allFeeds object has a name defined
         * and that the name is not empty.
         */
        it('Name should be defined and not empty', function () {
            for (feeds of allFeeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name).not.toBe('');

            }
        })

    });


    /* Test suite named "The menu" */

    /* This Test ensures the menu element is
     hidden by default.  */

    describe('The Menu', function () {
        const menuHidden = document.body;
        const menuIconLink = document.querySelector('.menu-icon-link');

        it('The Menu is hidden', function () {
            expect(menuHidden).toHaveClass('menu-hidden');
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('Display and hide the menu by clicking', function () {

            menuIconLink.click();
            expect(menuHidden.classList.contains('menu-hidden')).toBe(false);
            menuIconLink.click();
            expect(menuHidden.classList.contains('menu-hidden')).toBe(true);

        });

    });

    /* Test suite named "Initial Entries" */

    describe('Initial Entries', function () {

        /* 
        This Test ensures that when the loadFeed function
        is called and completes its work, there is at least
        a single .entry element within the .feed container.
        Because loadFeed() is asynchronous this test will use the beforEach() and asynchronous done() function.*/
        beforeEach(function (done) {
            loadFeed(0, done);

        });

        it('There is at least one .entry element in the .feed container ', function (done) {
            const entries = document.querySelectorAll('.feed .entry')
            expect(entries.length).toBeGreaterThan(0);
            done();

        });

    });

    /* Test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {

        /* This Test ensures that when a new feed is loaded by the
            loadFeed function the content actually changes
            loadFeed() is asynchronus*/


        let firstUrl,
            secondUrl;

        beforeEach(function (done) {

            loadFeed(0, function () {
                firstUrl = allFeeds[0].url;
                    loadFeed(1, function () {
                        secondUrl = allFeeds[1].url;
                        done();

            });
            

            });

            
        });

        it('When a new feed is loaded, the content actually changes', function (done) {

            expect(firstUrl === secondUrl).toBeFalsy();
            done();

        });

    });
}());