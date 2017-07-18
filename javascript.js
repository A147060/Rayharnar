 		// 	// slideshow
 			
			// var slideIndex = 1;
			// showDivs(slideIndex);

			// function plusDivs(n) {
			//   showDivs(slideIndex += n);
			// }

			// function showDivs(n) {
			//   var i;
			//   var x = document.getElementsByClassName("mySlides");
			//   if (n > x.length) {slideIndex = 1}    
			//   if (n < 1) {slideIndex = x.length}
			//   for (i = 0; i < x.length; i++) {
			//      x[i].style.display = "none";  
			//   }
			//   x[slideIndex-1].style.display = "block";  
			// }
			// // end of slideshow


			// Automatic slideshow
						var slideIndex = 0;
			showSlides();

			function showSlides() {
			    var i;
			    var slides = document.getElementsByClassName("mySlides");
			    var dots = document.getElementsByClassName("dot");
			    for (i = 0; i < slides.length; i++) {
			       slides[i].style.display = "none";  
			    }
			    slideIndex++;
			    if (slideIndex> slides.length) {slideIndex = 1}    
			    for (i = 0; i < dots.length; i++) {
			        dots[i].className = dots[i].className.replace(" active", "");
			    }
			    slides[slideIndex-1].style.display = "block";  
			    dots[slideIndex-1].className += " active";
			    setTimeout(showSlides, 3000); // Change image every 2 seconds
			}
			// end of automatic slideshow

			// Battery Animated icon

						function chargebattery() {
			  var a;
			  a = document.getElementById("div1");
			  a.innerHTML = "&#xf244;";
			  setTimeout(function () {
			      a.innerHTML = "&#xf243;";
			    }, 1000);
			  setTimeout(function () {
			      a.innerHTML = "&#xf242;";
			    }, 2000);
			  setTimeout(function () {
			      a.innerHTML = "&#xf241;";
			    }, 3000);
			  setTimeout(function () {
			      a.innerHTML = "&#xf240;";
			    }, 4000);
			}
			chargebattery();
			setInterval(chargebattery, 5000);

			// End of battery Animated icon

			// // Folder icon

			// function openfolder() {
			//   var a;
			//   a = document.getElementById("div2");
			//   a.innerHTML = "&#xf114;";
			//   setTimeout(function () {
			//       a.innerHTML = "&#xf115;";
			//     }, 1000);
			// }
			// openfolder();
			// setInterval(openfolder, 2000);
			// // END OF FOLDER ICON

			// Google Map

							// function initMap() {
		     //    var uluru = {lat: -25.363, lng: 131.044};
		     //    var map = new google.maps.Map(document.getElementById('map'), {
		     //      zoom: 4,
		     //      center: uluru
		     //    });
		     //    var marker = new google.maps.Marker({
		     //      position: uluru,
		     //      map: map
		     //    });
		     //  }
				// End of Google map