


// Add event listeners to update label background on radio button change
const radioInputs = document.querySelectorAll('.radio input');

radioInputs.forEach((input) => {
    input.addEventListener('change', () => {
        // Remove the 'checked' class from all labels
        document.querySelectorAll('.radio label').forEach((label) => {
            label.classList.remove('checked');
        });

        // Add the 'checked' class to the label of the selected radio button
        if (input.checked) {
            input.nextElementSibling.classList.add('checked');
        }
    });
});

