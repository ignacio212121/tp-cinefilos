document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {

            var allDropdownContents = document.querySelectorAll('.dropdown-content');
            allDropdownContents.forEach(function(content) {
                content.style.display = 'none';
            });

            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
                dropdownContent.style.display = 'flex';
            }
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown')) {
            var allDropdownContents = document.querySelectorAll('.dropdown-content');
            allDropdownContents.forEach(function(content) {
                content.style.display = 'none';
            });
        }
    });
});