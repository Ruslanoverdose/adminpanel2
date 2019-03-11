$(function() {
    let isOpen = false
    let menuIsOpen = false
    $('#toggleSidebar').click(function(e) {
        e.preventDefault()
        $("#sidebar").css({"left": !isOpen ? "0" : "-12%"})
        isOpen = !isOpen
    })
    $('.headerButton').click(function(e) {
        e.preventDefault()
        $('.profileMenu').css({"display": menuIsOpen ? "none" : "block"})
        menuIsOpen = !menuIsOpen
    })
})