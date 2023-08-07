import { cargoFunction } from "./Cargos.js";
import { DockList } from "./docks.js";
import { haulerFunction } from "./haulers.js";

const haulers = haulerFunction()
const docks = DockList()
const cargos = cargoFunction()
const mainContainer = document.querySelector(".dynamicLists")
mainContainer.innerHTML = docks + haulers + cargos



// Get references to the HTML lists
// const list1 = document.getElementById("list1");
// const list2 = document.getElementById("list2");
// const list3 = document.getElementById("list3");

// // Convert each HTML list to an array and sort it alphabetically
// const sortedList1 = Array.from(list1.children).sort((a, b) => a.innerText.localeCompare(b.innerText));
// const sortedList2 = Array.from(list2.children).sort((a, b) => a.innerText.localeCompare(b.innerText));
// const sortedList3 = Array.from(list3.children).sort((a, b) => a.innerText.localeCompare(b.innerText));

// // Convert each sorted array back to HTML and set the innerHTML property of each list
// list1.innerHTML = sortedList1.map(item => item.outerHTML).join("");
// list2.innerHTML = sortedList2.map(item => item.outerHTML).join("");
// list3.innerHTML = sortedList3.map(item => item.outerHTML).join("");

// Get references to the HTML lists
// const list1 = document.getElementById("list1");
// const list2 = document.getElementById("list2");
// const list3 = document.getElementById("list3");

// // Get the text content of each list item and store it in an array
// const list1Items = Array.from(list1.children).map(item => item.textContent.trim());
// const list2Items = Array.from(list2.children).map(item => item.textContent.trim());
// const list3Items = Array.from(list3.children).map(item => item.textContent.trim());

// // Sort each array alphabetically
// list1Items.sort();
// list2Items.sort();
// list3Items.sort();

// // Create new HTML for each sorted list item and set the innerHTML property of each list
// list1.innerHTML = list1Items.map(item => `<li>${item}</li>`).join("");
// list2.innerHTML = list2Items.map(item => `<li>${item}</li>`).join("");
// list3.innerHTML = list3Items.map(item => `<li>${item}</li>`).join("");

  
