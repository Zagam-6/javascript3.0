let checkbox = document.querySelectorAll('input[type="checkbox"]');
console.log(checkbox);

checkbox.forEach(input => input.addEventListener('click', handleCheck));

function handleCheck(e){
    console.log(e);
   }


let lastChecked;
function handleCheck(e){
lastChecked = this;
}

function handleCheck(e){
    if(e.shiftKey && this.checked){
    }
   lastChecked = this;
   }

   let lastChecked;
function handleCheck(e) {
 let inBetween = false;
 if (e.shiftKey && this.checked) {

  checkboxes.forEach(checkbox => {
   if (checkbox === this || checkbox === lastChecked) {
   inBetween = !inBetween;
   }
   if (inBetween) {
   checkbox.checked = true;
   }
  });
 }
lastChecked = this;
}