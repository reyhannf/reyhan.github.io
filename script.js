const form = document.getElementById("loginForm");
const result = document.getElementById("result");
const hasilUser = document.getElementById("hasilUser");
const hasilPass = document.getElementById("hasilPass");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulasi menyimpan data login (lokal)
  hasilUser.textContent = username;
  hasilPass.textContent = password;
  result.classList.remove("hidden");

  form.reset();
});
