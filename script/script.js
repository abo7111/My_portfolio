alert  ("مرحبا بكم في برفايل الفضيل   ");


// Active menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.onclick = () => {
        links.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    };
});


// Contact form
const form = document.getElementById("form");
const result = document.getElementById("result");

form.onsubmit = e => {
    e.preventDefault();
    result.textContent = "Message sent successfully!";
    form.reset();
};

