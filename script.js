// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        localStorage.setItem("isLogin", "yes");
        window.location.href = "index.html";
    });
}

// ================= CEK LOGIN =================
if (
    location.pathname.includes("index.html") ||
    location.pathname.includes("order.html")
) {
    if (localStorage.getItem("isLogin") !== "yes") {
        window.location.href = "login.html";
    }
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("isLogin");
    alert("Logout berhasil");
    window.location.href = "login.html";
}

// ================= ORDER =================
const orderForm = document.getElementById("orderForm");
if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Order berhasil dikirim!");
        orderForm.reset();
    });
}
