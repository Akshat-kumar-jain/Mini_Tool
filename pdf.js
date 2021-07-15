window.onload = function download(event) {
	document.getElementById("download").addEventListener("click", 
		=>(){
			const invoice = this.document.getElementById("canvas");
			 console.log(canvas);
			 console.log(window);
			 html2pdf().from(canvas).save();
	})
}