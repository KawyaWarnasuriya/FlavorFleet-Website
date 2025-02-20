document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signupBtn");
    const signinBtn = document.getElementById("signinBtn");
    const title = document.getElementById("title");
    const confirmPasswordField = document.querySelector("input[placeholder='Confirm Password']");
    const socialLinks = document.querySelector(".links");

    // **Hide "Confirm Password" on Page Load**
    confirmPasswordField.style.display = "none";  

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        title.innerText = "Sign Up";
        confirmPasswordField.style.display = "block"; // Show Confirm Password
        socialLinks.style.display = "none"; // Hide social links
        signinBtn.value = "Sign Up"; // Change button text
    });

    signinBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (signinBtn.value === "Sign Up") {
            title.innerText = "LogIn";
            confirmPasswordField.style.display = "none"; // Hide Confirm Password
            socialLinks.style.display = "flex"; // Show social links
            signinBtn.value = "LogIn"; // Change button text
        }
    });
});
