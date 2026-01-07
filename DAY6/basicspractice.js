// ===============================
// FORM HANDLING SCRIPT
// File: basicspractice.js
// ===============================

const form = document.querySelector("form");

// Helper function to show error
function showError(message) {
    alert(message);
}

// Helper function to get selected radio value
function getSelectedClass() {
    const classes = document.querySelectorAll('input[name="class"]');
    for (let c of classes) {
        if (c.checked) return c.value;
    }
    return null;
}

// Helper function to get checked subjects
function getSelectedSubjects() {
    const subjects = document.querySelectorAll('input[name="subject"]');
    let selected = [];
    subjects.forEach(sub => {
        if (sub.checked) selected.push(sub.value);
    });
    return selected;
}

// MAIN SUBMIT EVENT
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values
    const username = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const selectedClass = getSelectedClass();
    const selectedSubjects = getSelectedSubjects();
    const feedback = document.querySelector('textarea[name="feedback"]').value.trim();
    const city = document.querySelector('select[name="city"]').value;

    // ===============================
    // VALIDATIONS
    // ===============================

    if (username.length < 3) {
        showError("Username must be at least 3 characters long");
        return;
    }

    if (password.length < 6) {
        showError("Password must be at least 6 characters long");
        return;
    }

    if (!selectedClass) {
        showError("Please select your class");
        return;
    }

    if (selectedSubjects.length === 0) {
        showError("Please select at least one subject");
        return;
    }

    if (feedback.length < 5) {
        showError("Please write some feedback");
        return;
    }

    // ===============================
    // FORM DATA OBJECT
    // ===============================

    const formData = {
        username: username,
        password: password,
        class: selectedClass,
        subjects: selectedSubjects,
        feedback: feedback,
        city: city
    };

    // ===============================
    // SUCCESS
    // ===============================

    console.clear();
    console.log("✅ Form Submitted Successfully");
    console.table(formData);

    alert("Form submitted successfully 🎉\nCheck console for details.");

    // Reset form
    form.reset();
});
