# Feed Reader Testing
This project was created to test the Feed Reader App correct functionality, using Jasmine testing framework.
The file jasmine/spec/feedreader.js contains all the suite tests that check the functionality of the application.
There were 4 major points that were tested.

# Instalation
* Download the zip file or clone the project from GitHub repository to your PC.
* Load the index.html file.

# Content

1. [RSS Feeds test]
*     [allFeeds variable is defined and not empty]
*     [Url should be defined and not empty]
*     [Name should be defined and not empty]
2. [The Menu test]
*     [The Menu is hidden]
*     [Display and hide the menu by clicking]
3. [Initial Entries test]
*     [There is at least one .entry element in the .feed container]
4. [New Feed Selection test]
*     [When a new feed is loaded, the content actually changes]


# The Testing mechanism

* ##    RSS Feeds test

    This test has three stages: 
    *  **allFeeds variable is defined and not empty** - this test will check if the array "allFeeds" is not empty;
    *  **Url should be defined and not empty** - this test will check if all elements from the array "allFeeds" have an defined URl and the value of URL is not empty;
    * **Name should be defined and not empty** - this test will check if all elements from the array "allFeeds" have an defined NAME and the value of NAME is not empty.

* ##    The Menu test

    This test has two stages:
    * **The Menu is hidden** - this test will check if the MENU is hidden by default;
    * **Display and hide the menu by clicking** - this test will check if the MENU hides when the .menu-icon-link is clicked and appears when the .menu-icon-link is clicked again.
    
* ##    Initial Entries test

    This test has one stage:
    * **There is at least one .entry element in the .feed container** - this test checks if when the loadFeed
    function is called and completes its work, there is at least a single .entry element within the .feed container.
    
* ## New Feed Selection test

    This test has one stage:
    * **When a new feed is loaded, the content actually changes** - this test checks to see that when a new feed is loaded
    by the loadFeed function that the content actually changes.

  
# Dependencies

[Jasmine Testing Framework](https://jasmine.github.io/)
