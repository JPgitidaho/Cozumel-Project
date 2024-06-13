document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Simulate processing and redirect to record.html after 1 second
    setTimeout(function () {
      window.location.href = 'record.html' + new URLSearchParams(new FormData(event.target)).toString();
    }, 1000); 
  });
  