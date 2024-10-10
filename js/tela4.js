var slotcor = document.getElementById("slot1");
var slotcor_wrapper = document.getElementById("color-picker-wrapper");
slotcor.onchange = function() {
	slotcor_wrapper.style.backgroundColor = slotcor.value;    
}

var slots = document.querySelectorAll('.slot');
var inputs = document.querySelectorAll('input[type="color"]');

const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.onchange = function() {
  const fileName = fileInput.files[0].name;
  fileInput.placeholder = fileName;

  const reader = new FileReader();
  reader.onload = function(event) {
    preview.src = event.target.result;
  };
  reader.readAsDataURL(fileInput.files[0]);
}

inputs.forEach((input, index) => {
  input.onchange = function() {
    slots[index].style.backgroundColor = input.value;
  }
});
