document.getElementById('checkerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const tag = document.getElementById('tag').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Checking account for ${username}#${tag}...</p>`;

    // Simulate an API call
    setTimeout(() => {
        // Replace this with actual API call logic
        const isAccountValid = true; // Mock response
        if (isAccountValid) {
            resultDiv.innerHTML = `<p>Account ${username}#${tag} is valid!</p>`;
        } else {
            resultDiv.innerHTML = `<p>Account ${username}#${tag} is not valid.</p>`;
        }
    }, 1000);
});
