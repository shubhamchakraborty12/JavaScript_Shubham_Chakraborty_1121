document.getElementById('gradeForm').addEventListener('submit', function(event) {
    // 1. Prevent default form submission behavior to handle via JS
    event.preventDefault();

    // 2. Fetch DOM elements for evaluation
    const nameInput = document.getElementById('studentName');
    const marksInput = document.getElementById('studentMarks');
    
    const nameError = document.getElementById('nameError');
    const marksError = document.getElementById('marksError');
    
    const resultCard = document.getElementById('resultCard');

    // 3. Reset previous errors and execution configurations
    let isValid = true;
    nameError.textContent = '';
    marksError.textContent = '';
    nameInput.classList.remove('invalid');
    marksInput.classList.remove('invalid');
    resultCard.classList.add('hidden');

    // 4. Form Validation - Check Student Name
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        nameError.textContent = 'Student name cannot be empty.';
        nameInput.classList.add('invalid');
        isValid = false;
    } else if (nameValue.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long.';
        nameInput.classList.add('invalid');
        isValid = false;
    }

    // 5. Form Validation - Check Marks (presence, type, and range bounds)
    const marksValue = marksInput.value.trim();
    const marks = parseFloat(marksValue);

    if (marksValue === '') {
        marksError.textContent = 'Please enter the marks.';
        marksInput.classList.add('invalid');
        isValid = false;
    } else if (isNaN(marks)) {
        marksError.textContent = 'Marks must be a valid numerical value.';
        marksInput.classList.add('invalid');
        isValid = false;
    } else if (marks < 0 || marks > 100) {
        marksError.textContent = 'Marks must be strictly between 0 and 100.';
        marksInput.classList.add('invalid');
        isValid = false;
    }

    // Stop execution if evaluation requirements fail validation
    if (!isValid) return;

    // 6. Grading System Mechanism - Control Structures
    let grade = '';
    let passStatus = 'Passed';
    let isPass = true;

    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70) {
        grade = 'B';
    } else if (marks >= 60) {
        grade = 'C';
    } else if (marks >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
        passStatus = 'Failed';
        isPass = false;
    }

    // 7. Dynamic DOM Mutation to Display Results
    document.getElementById('resName').textContent = nameValue;
    document.getElementById('resScore').textContent = marks;
    document.getElementById('resGrade').textContent = grade;
    
    const statusEl = document.getElementById('resStatus');
    statusEl.textContent = passStatus;

    // Visual formatting shifts depending on binary condition outputs
    if (isPass) {
        resultCard.classList.remove('fail');
        statusEl.style.color = '#28a745';
    } else {
        resultCard.classList.add('fail');
        statusEl.style.color = '#dc3545';
    }

    // Present result presentation container to user
    resultCard.classList.remove('hidden');
});
