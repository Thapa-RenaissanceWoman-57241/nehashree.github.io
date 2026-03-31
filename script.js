// Smooth scroll to sections
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    scrollToSection(this.getAttribute("href").substring(1));
  });
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if(!name || !email || !message){
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(emailPattern)){
    formMessage.style.color = "red";
    formMessage.textContent = "Enter a valid email.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully!";
  this.reset();
});

// Simple scroll animation
const sections = document.querySelectorAll(".section");
sections.forEach(section=>{
  section.style.opacity=0;
  section.style.transform="translateY(50px)";
  section.style.transition="all 0.6s ease";
});
window.addEventListener("scroll", ()=>{
  sections.forEach(section=>{
    if(section.getBoundingClientRect().top < window.innerHeight-100){
      section.style.opacity=1;
      section.style.transform="translateY(0)";
    }
  });
});
