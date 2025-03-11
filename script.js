// Function to open the "Join Now" form for the selected plan
function openJoinForm(plan) {
    document.getElementById("joinFormModal").style.display = "flex";
    document.getElementById("planName").innerText = plan;
}

// Function to close the "Join Now" form modal
function closeJoinForm() {
    document.getElementById("joinFormModal").style.display = "none";
}

// Function for smooth scrolling to sections when clicking buttons
document.getElementById("joinNowMain").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Function to show program details
function showProgramDetails(program) {
    alert(program + " program details shown here.");
}
