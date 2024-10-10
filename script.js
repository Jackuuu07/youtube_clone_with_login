var menuIcon = document.querySelector(".left_menu");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function() {
    sidebar.classList.toggle("smallsidebar");
    container.classList.toggle("large_container");
}
function shownotification() {
    if ('Notification' in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                new Notification('Clicked Anchor Tag', { body: 'You clicked the anchor tag!' });
            }
        });
    }
}

document.getElementById('refreshlink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag

    location.reload(); // Reloads the page
});

function showAlert() {
            alert('it  is not useful for now!!!');
        }

document.getElementById('exploreLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    window.location.href = this.getAttribute('href'); // Navigate to the explore.html page
});
document.getElementById('subscriptionLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    window.location.href = this.getAttribute('href'); // Navigate to the explore.html page
});
document.getElementById('libraryLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    window.location.href = this.getAttribute('href'); // Navigate to the explore.html page
});
document.getElementById('historyLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    window.location.href = this.getAttribute('href'); // Navigate to the explore.html page
});
document.getElementById('playlistLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    window.location.href = this.getAttribute('href'); // Navigate to the explore.html page
});
document.getElementById('showmoreLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    window.location.href = this.getAttribute('href'); // Navigate to the explore.html page
});
document.querySelector('.notificcation.png').addEventListener('click', function() {
    alert('Logo of Your Black Tube!');
    // Add code to handle logo click event here
});
