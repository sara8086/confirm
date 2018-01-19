function ConfirmIt() {
	var e = event.target;
   
    var c = confirm("Are you sure?");
    if (c == true) {
        location = a.getAttribute("link");
    }
}
