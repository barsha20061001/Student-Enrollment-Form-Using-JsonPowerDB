const rollNo = document.getElementById("rollNo");
const fullName = document.getElementById("fullName");
const className = document.getElementById("className");
const birthDate = document.getElementById("birthDate");
const address = document.getElementById("address");
const enrollmentDate = document.getElementById("enrollmentDate");

const saveBtn = document.getElementById("saveBtn");
const updateBtn = document.getElementById("updateBtn");
const resetBtn = document.getElementById("resetBtn");

window.onload = resetForm;

function resetForm() {
    document.getElementById("studentForm").reset();

    rollNo.disabled = false;

    fullName.disabled = true;
    className.disabled = true;
    birthDate.disabled = true;
    address.disabled = true;
    enrollmentDate.disabled = true;

    saveBtn.disabled = true;
    updateBtn.disabled = true;
    resetBtn.disabled = true;

    rollNo.focus();
}

function enableFields() {
    fullName.disabled = false;
    className.disabled = false;
    birthDate.disabled = false;
    address.disabled = false;
    enrollmentDate.disabled = false;
}

rollNo.addEventListener("blur", () => {

    if (rollNo.value.trim() === "") return;

    enableFields();

    saveBtn.disabled = false;
    resetBtn.disabled = false;

    fullName.focus();
});

saveBtn.addEventListener("click", () => {

    if (
        fullName.value.trim() === "" ||
        className.value.trim() === "" ||
        birthDate.value === "" ||
        address.value.trim() === "" ||
        enrollmentDate.value === ""
    ) {
        alert("All fields are required!");
        return;
    }

    alert("Record Saved Successfully!");
    resetForm();
});

updateBtn.addEventListener("click", () => {
    alert("Record Updated Successfully!");
    resetForm();
});

resetBtn.addEventListener("click", resetForm);