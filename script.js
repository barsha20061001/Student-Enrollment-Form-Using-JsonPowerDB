window.onload = function () {
  resetForm();
};

function resetForm() {
  document.getElementById("studentForm").reset();

  document.getElementById("rollNo").disabled = false;
  document.getElementById("fullName").disabled = true;
  document.getElementById("className").disabled = true;
  document.getElementById("birthDate").disabled = true;
  document.getElementById("address").disabled = true;
  document.getElementById("enrollmentDate").disabled = true;

  document.getElementById("saveBtn").disabled = true;
  document.getElementById("updateBtn").disabled = true;
  document.getElementById("resetBtn").disabled = true;

  document.getElementById("rollNo").focus();
}

document.getElementById("resetBtn").addEventListener("click", resetForm);