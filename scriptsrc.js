document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Here you can add code to handle form submission, like sending data to the server.
      // You can use AJAX, Fetch API, or other techniques for that purpose.
  
      alert("Appointment request submitted successfully!");
      form.reset();
    });
  });
  