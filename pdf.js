document.getElementById("download").onclick = calldownload;
function calldownload(event) {
	console.log("in download function");
	
			const invoice = document.getElementById("canvas");
			 console.log(canvas);
			 console.log(window);
			 html2pdf().from(canvas).save();
	
}