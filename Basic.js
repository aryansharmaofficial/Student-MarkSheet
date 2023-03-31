const form = document.getElementById('marksheet-form');
const marksheet = document.getElementById('marksheet');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const rollno = document.getElementById('rollno').value;
  const subject1 = document.getElementById('subject1').value;
  const subject2 = document.getElementById('subject2').value;
  const subject3 = document.getElementById('subject3').value;

  const total = parseInt(subject1) + parseInt(subject2) + parseInt(subject3);
  const percentage = (total / 300) * 100;

  marksheet.innerHTML = `
    <h2>Mark Sheet</h2>
    <p>Name: ${name}</p>
    <p>Roll Number: ${rollno}</p>
    <p>Subject 1: ${subject1}</p>
    <p>Subject 2: ${subject2}</p>
    <p>Subject 3: ${subject3}</p>
    <p>Total: ${total}</p>
    <p>Percentage: ${percentage.toFixed(2)}%</p>
  `;

  form.style.display = 'none';
  marksheet.style.display = 'block';
});