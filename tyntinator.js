window.addEventListener("load", function () {
		if (typeof Tynt != undefined) {
			var scr = document.createElement("script");
			scr.innerText = "/* Added via myclipboardismine */ Tynt = [];";
			document.body.appendChild(scr);
		}
}, false);
