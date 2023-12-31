const popoutButton = document.getElementById('popoutButton');
const popoutContent = document.getElementById('popoutContent');



// Show the popout content on hover
popoutButton.addEventListener('mouseenter', () => {
    popoutContent.style.right = '120px'; // Bring it on-screen to the right
});

popoutContent.addEventListener('mouseenter', () => {
    popoutContent.style.right = '120px'; // Bring it on-screen to the right
});


// Hide the popout content when not hovering
popoutButton.addEventListener('mouseleave', () => {
    popoutContent.style.right = '-250px'; // Move it off-screen to the right
});

popoutContent.addEventListener('mouseleave', () => {
    popoutContent.style.right = '-250px'; // Move it off-screen to the right
});


// Close the popout content if the user clicks outside of it
document.addEventListener('click', (event) => {
    if (
        event.target !== popoutButton &&
        event.target !== popoutContent &&
        !popoutContent.contains(event.target)
    ) {
        popoutContent.style.right = '-250px'; // Move it off-screen to the right
    }
});

const popoutButton2 = document.getElementById('popoutButton2');
const popoutContent2 = document.getElementById('popoutContent2');

// Show the popout content on hover
popoutButton2.addEventListener('mouseenter', () => {
    popoutContent2.style.right = '120px'; // Bring it on-screen to the right
});

popoutContent2.addEventListener('mouseenter', () => {
    popoutContent2.style.right = '120px'; // Bring it on-screen to the right
});


// Hide the popout content when not hovering
popoutButton2.addEventListener('mouseleave', () => {
    popoutContent2.style.right = '-250px'; // Move it off-screen to the right
});

popoutContent2.addEventListener('mouseleave', () => {
    popoutContent2.style.right = '-250px'; // Move it off-screen to the right
});


// Close the popout content if the user clicks outside of it
document.addEventListener('click', (event) => {
    if (
        event.target !== popoutButton2 &&
        event.target !== popoutContent2 &&
        !popoutContent2.contains(event.target)
    ) {
        popoutContent2.style.right = '-250px'; // Move it off-screen to the right
    }
});