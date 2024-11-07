document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === "30404261200811" && password === "Vxdt@7429") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("iconsPage").style.display = "grid";
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
});

function showResultPage() {
    document.getElementById("iconsPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
}

function forgotPassword() {
    alert("خاصية استعادة كلمة المرور غير مفعلة.");
}