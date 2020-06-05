class HeaderPage {
    get headerLabel() { return $('body > div.row > div > nav > a');}
    get logoutLink() { return $('#navbarSupportedContent > ul > li:nth-child(4) > a')}
    get linkLink() { return $('#navbarSupportedContent > ul > li:nth-child(2) > a')}
    get heroFacts() { return $('#navbarDropdown')}
    get wolverineOption() { return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)')}
    get spiderManOption() { return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)')}
    get wolverineAlert() { return $('#wolverineModalLabel')}
    get spiderManAlert() { return $('#spidermanModalLabel')}
    get searchField() { return $('#search-box')}
    get searchButton() { return $('#search-form > button')}
    // Modal for window stuff
    // Wolverine
    get wolverineModalWindow() { return $('#wolverineModal > div > div')}
    get wolverineModalTitle() { return $('#wolverineModalLabel')}
    get wolverineModalContent(){ return $('#wolverineModal > div > div > div.modal-body')}
    get wolverineModalCloseButton() { return $('#wolverineModal > div > div > div.modal-footer > button')}
    //Spiderman
    get spidermanModalWindow() { return $('#spidermanModal > div > div')}
    get spidermanModalTitle() { return $('#spidermanModalLabel')}
    get spidermanModalContent(){ return $('#spidermanModal > div > div > div.modal-body')}
    get spidermanModalCloseButton() { return $('#spidermanModal > div > div > div.modal-footer > button')}
}   

    module.exports = new HeaderPage();
