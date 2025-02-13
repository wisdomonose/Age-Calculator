function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday has not occurred this year}
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

// Display the result
document.getElementById('result').innerText = `You are ${age} years old.`;
}