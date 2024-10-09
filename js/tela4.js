var slotcor = document.getElementById("slot1");
var slotcor_wrapper = document.getElementById("color-picker-wrapper");
slotcor.onchange = function() {
	slotcor_wrapper.style.backgroundColor = slotcor.value;    
}

var slots = document.querySelectorAll('.slot');
var inputs = document.querySelectorAll('input[type="color"]');

inputs.forEach((input, index) => {
  input.onchange = function() {
    slots[index].style.backgroundColor = input.value;
  }
});
