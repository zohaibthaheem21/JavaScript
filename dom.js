// getElementById()

// var a = document.getElementById('heading-1');
// // console.log(a);
// a.textContent = "Zohaib";
// a.innerText = "Thaheem";
// console.log(a);
// a.style.borderBottom = "10px solid #000";



// getElementsByClassName()

// var a = document.getElementsByClassName('para');
// console.log(a[1]);
// a[1].textContent = "Wah sha thaooo karen";
// a[1].style.fontWeight = "bold";
// a[1].style.color = "RED";
// a[1].style.backgroundColor = "Yellow";

// for(var i=0; i<a.length; i++) {
//     a[i].style.backgroundColor = "Yellow";
// }



// getElementsByTagName()

var li = document.getElementsByTagName('li');
// console.log(li[1]);
li[1].textContent = "Wah sha thaooo karen";
li[1].style.fontWeight = "bold";
li[1].style.color = "RED";
li[1].style.backgroundColor = "Yellow";

for(var i=0; i<li.length; i++) {
    li[i].style.backgroundColor = "Yellow";
}
