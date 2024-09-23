// Add this script before the closing </body> tag or in a separate JS file
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const projectDetails = document.querySelectorAll('.project-details');

    // Show the first project by default
    document.getElementById('imagefinder').style.display = 'block';

    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all project items
            projectItems.forEach(i => i.classList.remove('active'));

            // Hide all project details
            projectDetails.forEach(detail => detail.style.display = 'none');

            // Set the clicked project item as active
            item.classList.add('active');

            // Show the corresponding project details
            const selectedProject = item.getAttribute('data-project');
            document.getElementById(selectedProject).style.display = 'block';
        });
    });
});
