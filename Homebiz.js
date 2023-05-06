/* getting the buttons and slide for the search slide */
/* search button on navbar */
let searchfa = document.querySelector(".searchfa")
/* close button on search slide */
let timesfa = document.querySelector(".timesfa")
/* search slide */
let searchover = document.querySelector(".searchover")

/* creating a addeventlistener to note every click of the search button */
searchfa.addEventListener('click', function () {
 console.log("sdasd")
 /*  changing style to make the search slide appear by sliding down */
 searchover.style.transform = "translate(0%)"
})
/* creating a addeventlistener to note every click of the close button */
timesfa.addEventListener('click', function () {
 console.log("sdasd")
 /*  changing style to make the search slide disappear by sliding up*/
 searchover.style.transform = "translateY(-100%)"
})

/* getting the buttons and dropdown for the category  */
const dropdownToggle = document.getElementById('dropdownMenuButton');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownSearch = document.getElementById('dropdown-search');
const dropdownOptions = document.querySelectorAll('.dropdown-item');

/* creating a addeventlistener to note every click of on the button */
dropdownToggle.addEventListener('click', () => {
 /* changing style to make dropdown menu for category if on display none to change to nothing */
 dropdownMenu.style.display = ""
 /* toggle dropmenu for category to show*/
 dropdownMenu.classList.toggle('show');
 /* changing style for dropdown menu for location to display none */
 dropdownMenuc.style.display = "none"
 console.log("sdas")
});
/* creating a addeventlistener to note every input of on the search input  */
dropdownSearch.addEventListener('input', () => {
 /* changing every value in input to lowercase */
 const searchValue = dropdownSearch.value.toLowerCase();
 /* looping for every option value in dropdown menu for category */
 for (let i = 0; i < dropdownOptions.length; i++) {
  const option = dropdownOptions[i];
  /* changing every value in option to lowercase */
  const text = option.textContent.toLowerCase();
  if (text.includes(searchValue)) {
   /* display the option if it correlates with value in input */
   option.style.display = "";
  } else {
   /* do not display the option if it does not correlate with value in input */
   option.style.display = "none";
  }
 }
});

/* same syntax of dropmenu of category */
const dropdownTogglec = document.getElementById('dropdownMenuButtonc');
const dropdownMenuc = document.querySelector('.dropdown-menuc');
const dropdownSearchc = document.getElementById('dropdown-searchc');
const dropdownOptionsc = document.querySelectorAll('.dropdown-itemc');

dropdownTogglec.addEventListener('click', () => {
 dropdownMenuc.style.display = ""
 dropdownMenuc.classList.toggle('show');
 dropdownMenu.style.display = "none"
 console.log("sdas")
});

dropdownSearchc.addEventListener('input', () => {
 const searchValue = dropdownSearchc.value.toLowerCase();
 for (let i = 0; i < dropdownOptionsc.length; i++) {
  const option = dropdownOptionsc[i];
  const text = option.textContent.toLowerCase();
  if (text.includes(searchValue)) {
   option.style.display = "";
  } else {
   option.style.display = "none";
  }
 }
});


/*mainpage toggling*/
/* same syntax of dropmenu of category */
const dropdownTogglem = document.getElementById('dropdownMenuButtonm');
const dropdownMenum = document.querySelector('.dropdown-menum');
const dropdownSearchm = document.getElementById('dropdown-searchm');
const dropdownOptionsm = document.querySelectorAll('.dropdown-itemm');

dropdownTogglem.addEventListener('click', () => {
 dropdownMenum.style.display = ""
 dropdownMenum.classList.toggle('show');
 dropdownMenumm.style.display = "none"
 console.log("sdas")
});

dropdownSearchm.addEventListener('input', () => {
 const searchValue = dropdownSearchm.value.toLowerCase();
 for (let i = 0; i < dropdownOptionsm.length; i++) {
  const option = dropdownOptionsm[i];
  const text = option.textContent.toLowerCase();
  if (text.includes(searchValue)) {
   option.style.display = "";
  } else {
   option.style.display = "none";
  }
 }
});

/* same syntax of dropmenu of category */
const dropdownTogglemm = document.getElementById('dropdownMenuButtonmm');
const dropdownMenumm = document.querySelector('.dropdown-menumm');
const dropdownSearchmm = document.getElementById('dropdown-searchmm');
const dropdownOptionsmm = document.querySelectorAll('.dropdown-itemmm');

dropdownTogglemm.addEventListener('click', () => {
 dropdownMenumm.style.display = ""
 dropdownMenumm.classList.toggle('show');
 dropdownMenum.style.display = "none"
 console.log("sdas")
});

dropdownSearchmm.addEventListener('input', () => {
 const searchValue = dropdownSearchmm.value.toLowerCase();
 for (let i = 0; i < dropdownOptionsmm.length; i++) {
  const option = dropdownOptionsmm[i];
  const text = option.textContent.toLowerCase();
  if (text.includes(searchValue)) {
   option.style.display = "";
  } else {
   option.style.display = "none";
  }
 }
});

const filterdrop = document.getElementById('filterdrop');
const filterdropmenu = document.querySelector('.fildrop');
filterdrop.addEventListener('click', () => {
 filterdropmenu.classList.toggle('show');
 console.log("sdas")
});

/*same syntax as search slide */
const menu = document.getElementById('tab');
const dropmen = document.querySelector('.tabdrop');
const ttimesfa = document.querySelector(".ttimesfa")
menu.addEventListener('click', () => {
 dropmen.style.transform = "translateX(0%)"
 console.log("sdas")
});
ttimesfa.addEventListener('click', function () {
 console.log("sdasd")
 dropmen.style.transform = "translateX(-100%)"
})



const showbtn = document.getElementById('showbtn');
const tagmenu = document.querySelector('.chek');
const tagmen = document.querySelector('.tAG');
showbtn.addEventListener('click', () => {
 if (showbtn.innerHTML = `Show More <i class="fa fa-arrow-up"></i>`) {
  console.log("sdnajs")
  tagmen.style.height = "1080px"
  tagmenu.style.height = "1020px"
  tagmenu.innerHTML = `<div class="holdcheck">
 <input class="checkbox" type="checkbox" name="" id="">
 <label class="fw-semibold" for="">3D Designs</label>
</div>
<div class="holdcheck">
 <input class="checkbox" type="checkbox" name="" id="">
 <label class="fw-semibold" for="">3D Paints</label>
</div>
<div class="holdcheck">
 <input class="checkbox" type="checkbox" name="" id="">
 <label class="fw-semibold" for="">3D Panel</label>
</div>
<div class="holdcheck">
 <input class="checkbox" type="checkbox" name="" id="">
 <label class="fw-semibold" for="">3D Panel</label>
</div>
<div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Designs</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Paints</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Panel</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Panel</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Designs</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Paints</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Panel</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Panel</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Designs</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Paints</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Panel</label>
       </div>
       <div class="holdcheck">
        <input class="checkbox" type="checkbox" name="" id="">
        <label class="fw-semibold" for="">3D Panel</label>
       </div><div class="holdcheck">
       <input class="checkbox" type="checkbox" name="" id="">
       <label class="fw-semibold" for="">3D Designs</label>
      </div>
      <div class="holdcheck">
       <input class="checkbox" type="checkbox" name="" id="">
       <label class="fw-semibold" for="">3D Paints</label>
      </div>
      <div class="holdcheck">
       <input class="checkbox" type="checkbox" name="" id="">
       <label class="fw-semibold" for="">3D Panel</label>
      </div>
      <div class="holdcheck">
       <input class="checkbox" type="checkbox" name="" id="">
       <label class="fw-semibold" for="">3D Panel</label>
      </div><div class="holdcheck">
      <input class="checkbox" type="checkbox" name="" id="">
      <label class="fw-semibold" for="">3D Designs</label>
     </div>
     <div class="holdcheck">
      <input class="checkbox" type="checkbox" name="" id="">
      <label class="fw-semibold" for="">3D Paints</label>
     </div>
     <div class="holdcheck">
      <input class="checkbox" type="checkbox" name="" id="">
      <label class="fw-semibold" for="">3D Panel</label>
     </div>
     <div class="holdcheck">
      <input class="checkbox" type="checkbox" name="" id="">
      <label class="fw-semibold" for="">3D Panel</label>
     </div><div class="holdcheck">
     <input class="checkbox" type="checkbox" name="" id="">
     <label class="fw-semibold" for="">3D Designs</label>
    </div>
    <div class="holdcheck">
     <input class="checkbox" type="checkbox" name="" id="">
     <label class="fw-semibold" for="">3D Paints</label>
    </div>
    <div class="holdcheck">
     <input class="checkbox" type="checkbox" name="" id="">
     <label class="fw-semibold" for="">3D Panel</label>
    </div>
    <div class="holdcheck">
     <input class="checkbox" type="checkbox" name="" id="">
     <label class="fw-semibold" for="">3D Panel</label>
    </div><div class="holdcheck">
    <input class="checkbox" type="checkbox" name="" id="">
    <label class="fw-semibold" for="">3D Designs</label>
   </div>
   <div class="holdcheck">
    <input class="checkbox" type="checkbox" name="" id="">
    <label class="fw-semibold" for="">3D Paints</label>
   </div>
   <div class="holdcheck">
    <input class="checkbox" type="checkbox" name="" id="">
    <label class="fw-semibold" for="">3D Panel</label>
   </div>
   <div class="holdcheck">
    <input class="checkbox" type="checkbox" name="" id="">
    <label class="fw-semibold" for="">3D Panel</label>
   </div><div class="holdcheck">
   <input class="checkbox" type="checkbox" name="" id="">
   <label class="fw-semibold" for="">3D Designs</label>
  </div>
  <div class="holdcheck">
   <input class="checkbox" type="checkbox" name="" id="">
   <label class="fw-semibold" for="">3D Paints</label>
  </div>
  <div class="holdcheck">
   <input class="checkbox" type="checkbox" name="" id="">
   <label class="fw-semibold" for="">3D Panel</label>
  </div>
  <div class="holdcheck">
   <input class="checkbox" type="checkbox" name="" id="">
   <label class="fw-semibold" for="">3D Panel</label>
  </div><div class="holdcheck">
  <input class="checkbox" type="checkbox" name="" id="">
  <label class="fw-semibold" for="">3D Designs</label>
 </div>
 <div class="holdcheck">
  <input class="checkbox" type="checkbox" name="" id="">
  <label class="fw-semibold" for="">3D Paints</label>
 </div>
 <div class="holdcheck">
  <input class="checkbox" type="checkbox" name="" id="">
  <label class="fw-semibold" for="">3D Panel</label>
 </div>
 <div class="holdcheck">
  <input class="checkbox" type="checkbox" name="" id="">
  <label class="fw-semibold" for="">3D Panel</label>
 </div><div class="holdcheck">
 <input class="checkbox" type="checkbox" name="" id="">
 <label class="fw-semibold" for="">3D Designs</label>
</div>
<div class="holdcheck">
 <input class="checkbox" type="checkbox" name="" id="">
 <label class="fw-semibold" for="">3D Paints</label>
</div>
<div class="holdcheck">
 <input class="checkbox" type="checkbox" name="" id="">
 <label class="fw-semibold" for="">3D Panel</label>
</div>
<div class="holdcheck">
 <input class="checkbox" type="checkbox" name="" id="">
 <label class="fw-semibold" for="">3D Panel</label>
</div><div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Designs</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Paints</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div><div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Designs</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Paints</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div><div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Designs</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Paints</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div><div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Designs</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Paints</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div><div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Designs</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Paints</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div>
<div class="holdcheck">
<input class="checkbox" type="checkbox" name="" id="">
<label class="fw-semibold" for="">3D Panel</label>
</div>
 `
  showbtn.innerHTML = `Show Less <i class="fa fa-arrow-up"></i>`
 } else if (showbtn.innerHTML = `Show Less <i class="fa fa-arrow-up"></i>`) {
  console.log("sdnajs")
  tagmen.style.height = "80px"
  tagmenu.style.height = "20px"
  tagmenu.innerHTML = `<div class="holdcheck">
  <input class="checkbox" type="checkbox" name="" id="">
  <label class="fw-semibold" for="">3D Designs</label>
 </div>
 <div class="holdcheck">
  <input class="checkbox" type="checkbox" name="" id="">
  <label class="fw-semibold" for="">3D Paints</label>
 </div>
 <div class="holdcheck">
  <input class="checkbox" type="checkbox" name="" id="">
  <label class="fw-semibold" for="">3D Panel</label>
 </div>
 <div class="holdcheck">
  <input class="checkbox" type="checkbox" name="" id="">
  <label class="fw-semibold" for="">3D Panel</label>
 </div>
 <div class="holdcheck">
         <input class="checkbox" type="checkbox" name="" id="">
         <label class="fw-semibold" for="">3D Designs</label>
        </div>
        <div class="holdcheck">
         <input class="checkbox" type="checkbox" name="" id="">
         <label class="fw-semibold" for="">3D Paints</label>
        </div>
        <div class="holdcheck">
         <input class="checkbox" type="checkbox" name="" id="">
         <label class="fw-semibold" for="">3D Panel</label>
        </div>
        <div class="holdcheck">
         <input class="checkbox" type="checkbox" name="" id="">
         <label class="fw-semibold" for="">3D Panel</label>
        </div>
        
  `
  showbtn.innerHTML = `Show More <i class="fa fa-arrow-up"></i>`
 }
});

