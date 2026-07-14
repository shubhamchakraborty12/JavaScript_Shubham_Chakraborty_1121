document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gymForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    const plan = document.getElementById('plan');

    // Validation Utility Functions
    const setInvalid = (element, message, errorEl) => {
        element.classList.remove('valid');
        element.classList.add('invalid');
        errorEl.textContent = message;
    };

    const setValid = (element, errorEl) => {
        element.classList.remove('invalid');
        element.classList.add('valid');
        errorEl.textContent = '';
    };

    // Field Validators
    const validateName = () => {
        const errorEl = document.getElementById('nameError');
        if (fullName.value.trim().length < 3) {
            setInvalid(fullName, 'Name must be at least 3 characters long.', errorEl);
            return false;
        }
        setValid(fullName, errorEl);
        return true;
    };

    const validateEmail = () => {
        const errorEl = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            setInvalid(email, 'Please enter a valid email address.', errorEl);
            return false;
        }
        setValid(email, errorEl);
        return true;
    };

    const validateAge = () => {
        const errorEl = document.getElementById('ageError');
        const ageVal = parseInt(age.value, 10);
        if (isNaN(ageVal) || ageVal < 16 || ageVal > 100) {
            setInvalid(age, 'You must be between 16 and 100 years old.', errorEl);
            return false;
        }
        setValid(age, errorEl);
        return true;
    };

    const validatePlan = () => {
        const errorEl = document.getElementById('planError');
        if (plan.value === '') {
            setInvalid(plan, 'Please select a membership plan.', errorEl);
            return false;
        }
        setValid(plan, errorEl);
        return true;
    };

    // Live Event Listeners (Triggers validation instantly while typing)
    fullName.addEventListener('input', validateName);
    email.addEventListener('input', validateEmail);
    age.addEventListener('input', validateAge);
    plan.addEventListener('change', validatePlan);

    // Blur Event Listeners (Triggers validation when user leaves field empty)
    fullName.addEventListener('blur', validateName);
    email.addEventListener('blur', validateEmail);
    age.addEventListener('blur', validateAge);

    // Final Form Submission Check
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop form submission

        // Run all validations
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isAgeValid = validateAge();
        const isPlanValid = validatePlan();

        if (isNameValid && isEmailValid && isAgeValid && isPlanValid) {
            alert('Form submitted successfully! Welcome to Iron Pulse Gym.');
            form.reset();
            
            // Remove valid visual markers after reset
            [fullName, email, age, plan].forEach(el => el.classList.remove('valid'));
        }
    });
});
