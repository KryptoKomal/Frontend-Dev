// q1_welcome.js

// jQuery code runs when DOM is fully loaded
$(document).ready(function () {
  // ==========================
  // 1. Set greeting based on time of day
  // ==========================

  // Get current hour (0–23)
  var currentHour = new Date().getHours();
  var greetingText = "";

  // Decide greeting based on time
  if (currentHour < 12) {
    greetingText = "Good Morning! Welcome to our website.";
  } else if (currentHour < 17) {
    greetingText = "Good Afternoon! Hope you're having a productive day.";
  } else {
    greetingText = "Good Evening! Relax and enjoy your stay.";
  }

  // Use jQuery to set the greeting text in the <p id="greetingText">
  $("#greetingText").text(greetingText);

  // Store original greeting so we can reset later
  var originalGreeting = greetingText;

  // ==========================
  // 2. Change Greeting button → show motivational quote
  // ==========================
  $("#changeGreetingBtn").on("click", function () {
    // Change the greeting text to a motivational quote
    $("#greetingText").text("“Believe in yourself. You are capable of amazing things.”");
  });

  // ==========================
  // 3. Toggle visibility of welcome message
  // ==========================
  $("#toggleWelcomeBtn").on("click", function () {
    // toggle() will hide if visible, show if hidden
    $("#welcomeMessage").toggle();
  });

  // (Extra) Reset greeting back to time-based text
  $("#resetGreetingBtn").on("click", function () {
    $("#greetingText").text(originalGreeting);
  });

  // ==========================
  // 4. Show alert when greeting is clicked
  // ==========================
  $("#greetingText").on("click", function () {
    // alert shows a simple pop-up message
    alert("You clicked on the greeting!");
  });
});
