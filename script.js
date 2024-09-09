document.addEventListener('DOMContentLoaded', function() {
    function toggleDropdown() {
        var dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    }

    function selectUser(userType) {
        let dropBtn = document.querySelector('.dropbtn');
        dropBtn.textContent = userType; // Change the button text
        document.querySelector('.dropdown-content').style.display = 'none'; // Hide the dropdown after selection
    }

    // Make the functions globally accessible
    window.toggleDropdown = toggleDropdown;
    window.selectUser = selectUser;
});
