var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ol = document.querySelector("ol");
var li = document.getElementsByTagName("li");


// find input length
function inputLength() {
	return input.value.length;
}

// Create Elements function
function createListElement() {
	var li = document.createElement("li"); // create List
	li.appendChild(document.createTextNode(input.value)); //add text (from input text box) to the list
	ol.appendChild(li); //add list to the ol
	input.value  = "";  //make Empty the input text box

	// Create Done Button
	var button = document.createElement("button"); 	// create button
	button.appendChild(document.createTextNode("Done")); //add text (Done) to the button
	li.appendChild(button); //add button to the list

	// Call lineThrowParent function after click on DONE button
	button.onclick = lineThrowParent;

	// create Delete Button
	var button = document.createElement("button");  // create button
	button.appendChild(document.createTextNode("Delete"));  //add text (Delete) to the button
	li.appendChild(button); //add button to the list

	// Call removeParent function after click on DELETE button
	button.onclick = removeParent;
}



// on/off linethrow by toggle done class from css
function lineThrowParent(event) {
	event.target.parentNode.classList.toggle("done");
}


// Delete list items from the Ordered list
function removeParent(evt) {
	evt.target.parentNode.remove();
}




// Add list to the list items after click on the add an item buttton
function addListAfterClick() {
	if (inputLength() > 0 ) {
		createListElement();
	}

}


// Add list tothe List items after pressing enter
function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13 ) {
		createListElement();
	}
}




// call Click funtion ater click on the add an item buttton
button.addEventListener("click", addListAfterClick);

// Call Keypress funtion ater pressing enter
input.addEventListener("keypress", addListAfterEnter);