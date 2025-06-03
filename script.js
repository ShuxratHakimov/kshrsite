const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const form = document.getElementById('multiStepForm');
const formMessage = document.getElementById('formMessage');

let currentStep = 0;

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    steps[currentStep].classList.remove('active');
    currentStep++;
    steps[currentStep].classList.add('active');
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    steps[currentStep].classList.remove('active');
    currentStep--;
    steps[currentStep].classList.add('active');
  });
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  fetch('send.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    formMessage.textContent = '✅ Message sent successfully!';
    form.reset();
    currentStep = 0;
    steps.forEach(step => step.classList.remove('active'));
    steps[0].classList.add('active');
  })
  .catch(err => {
    formMessage.textContent = '❌ Error sending message.';
  });
});

