const drop = document.getElementById('drop');
const drop1 = document.getElementById('drop1');
const icon = document.getElementById('icon');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');
const drop2 = document.getElementById('drop2');

// create drop element for Feature drop
icon.addEventListener('click', function(){
   dropdownFeatures.style.display = 'block';
   icon.style.display = 'none';
   icon1.style.display = 'inline-block';
});
icon1.addEventListener('click', function(){
   dropdownFeatures.style.display = 'none';
   icon.style.display = 'inline-block';
   icon1.style.display = 'none';
});

// create drop element for Company drop
icon2.addEventListener('click', function(){
   dropdownCompany.style.display = 'block';
   icon2.style.display = 'none';
   icon3.style.display = 'inline-block';
});
icon3.addEventListener('click', function(){
   dropdownCompany.style.display = 'none';
   icon2.style.display = 'inline-block';
   icon3.style.display = 'none';
});
