document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Fetch all form fields
  const formData = {
    fider: document.querySelector('input[name="fider"]').value,
    tp_name: document.querySelector('input[name="tp_name"]').value,
    quvvat: document.querySelector('input[name="quvvat"]').value,
    TT: document.querySelector('input[name="TT"]').value,
    istemolchi: document.querySelector('input[name="istemolchi"]').value,
    uzunlikL1: document.querySelector('input[name="uzunlikL1"]').value,
    uzunlikL2: document.querySelector('input[name="uzunlikL2"]').value,
    uzunlikL3: document.querySelector('input[name="uzunlikL3"]').value,
    activeP: document.querySelector('input[name="activeP"]').value,
    reactiveP: document.querySelector('input[name="reactiveP"]').value,
    UVA: document.querySelector('input[name="UVA"]').value,
    UVB: document.querySelector('input[name="UVB"]').value,
    UVC: document.querySelector('input[name="UVC"]').value,
    IAA: document.querySelector('input[name="IAA"]').value,
    IAB: document.querySelector('input[name="IAB"]').value,
    IAC: document.querySelector('input[name="IAC"]').value,
    UOA: document.querySelector('input[name="UOA"]').value,
    UOB: document.querySelector('input[name="UOB"]').value,
    UOC: document.querySelector('input[name="UOC"]').value,
    cosfi: document.querySelector('input[name="cosfi"]').value,
    utkazgich: document.querySelector('input[name="utkazgich"]').value,
    latitude: document.getElementById("latitude").value,
    longitude: document.getElementById("longitude").value,
  };

  // Send the form data to the server using fetch
  fetch(
    "https://script.google.com/macros/s/AKfycbzkCwIQEj4GKHUapXN7tsQjlNXc25XjzFLWZ_1a9P-aHTtcudKpyyrRcLQmqv_sfQkA/exec",
    {
      method: "POST",
      mode: "no-cors", // Disable CORS mode to avoid the error
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  alert("Ma'lumotlar muvaffaqiyatli qabul qilindi!"); // No response handling due to no-cors mode
});

// Geolocation logic
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Assign latitude and longitude to hidden input fields
      document.getElementById("latitude").value = position.coords.latitude;
      document.getElementById("longitude").value = position.coords.longitude;
      console.log(
        "Geolocation captured: ",
        position.coords.latitude,
        position.coords.longitude
      ); // Debugging
    },
    function (error) {
      console.error("Error getting location: " + error.message);
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}
