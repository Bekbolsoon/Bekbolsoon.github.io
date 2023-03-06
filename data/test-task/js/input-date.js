// Get the select elements
const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

// Generate options for days
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  daySelect.appendChild(option);
}

// Generate options for months
const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];
for (let i = 0; i < months.length; i++) {
  const option = document.createElement("option");
  option.value = i + 1;
  option.text = months[i];
  monthSelect.appendChild(option);
}

// Generate options for years
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 100; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  yearSelect.appendChild(option);
}