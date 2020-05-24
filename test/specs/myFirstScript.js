describe('Tours homepage', () => {
    it('should display the correct homepage title', () => {
        browser.url('http://newtours.demoaut.com/');
        const title = browser.getTitle();
        assert.equal(title, 'Welcome: Mercury Tours');
    });
});