$(document).ready(function() {

    // --- Hamburger Menu Toggle ---
    const hamburger = $('.hamburger-menu');
    const navLinks = $('.nav-links');

    hamburger.on('click', function() {
        navLinks.toggleClass('active');
    });

    // --- Back to Top Button ---
    const backToTopButton = $('#back-to-top-btn');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            backToTopButton.fadeIn();
        } else {
            backToTopButton.fadeOut();
        }
    });

    backToTopButton.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    // --- Active Navigation Link Highlighting ---
    const currentPage = window.location.pathname.split("/").pop(); // Gets the current file name e.g., "resume.html"

    if (currentPage === "" || currentPage === "index.html") {
        $('.nav-links a[href="index.html"]').addClass('active');
    } else {
        $('.nav-links a').each(function() {
            if ($(this).attr('href') === currentPage) {
                $(this).addClass('active');
            }
        });
    }
});