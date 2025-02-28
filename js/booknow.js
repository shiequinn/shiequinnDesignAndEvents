document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("booking-container");
    var form = document.getElementById("appointment-form");
    var formInputs = document.querySelectorAll("#appointment-form input");

    // Event listener for mouse entering the container
    container.addEventListener("mouseenter", function () {
      pauseAnimation();
    });
  
    // Event listener for mouse leaving the container
    container.addEventListener("mouseleave", function () {
      resumeAnimation();
    });
  
    // Submit form event listener
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Simulate form submission (replace with actual implementation)
      setTimeout(function () {
        // Show success message
        var messageDiv = document.getElementById("message");
        messageDiv.innerHTML = "Appointment booked successfully!";
        messageDiv.style.color = "green";
        // Clear form fields
        form.reset();
    // Pause animation when any form input is focused
    formInputs.forEach(function (input) {
      input.addEventListener("focus", pauseAnimation);
      input.addEventListener("blur", resumeAnimation);
    });
  });
    });
  });
