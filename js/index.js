
//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.
/**
 * Part 1:
 * On clicking of the 'Sign Up' button:
 * Display an alert that says "We are not currently taking sign ups"
 * Then change hte text of the button to say: "No Sign Ups!"
 */

	$('.button2').on('click', function(){
      window.alert("We are not taking sign ups");
      $('.button2').text('No Sign Ups!');

      });

/**
 * Question 2:
 * If a user clicks "Read More":
 * Have the extra <p> tag slide down along with a "Read Less" link in the blog post using
 * $.slideDown() and $.show()
 * Hide the "Read More" link using $.hide()
 */

	$('.more').on('click', function(){
		$('p').slideDown();
		$('a').show('<a href="#">Read less</a>').addClass('.less');
		$('.more').hide();
});
/**
 * Question 3:
 * If a user clicks "Read Less":
 * Have the extra <p> slide up and hide the "Read Less" link using $.slideUp() and $.hide()
 * Show the "Read More" link using $.show()

 */

	$('.less').on('click', function(){
		$('p').slideUp();
		$('.less').hide();
		$('.more').show();
});

/**
 * Question 4:
 * Do something similar with the About text in the side bar using “Learn more”.
 * Have the extra <p> tag slide down along with a "Do Not Learn" link in the blog post using
 * $.slideDown() and $.show()
 * Hide the "Learn More" link using $.hide()
 */
	$('#learn').on('click', function(){
		$('p-sidebar').slideDown(600);
		$('a').show('<a href="#">Do Not Learn</a>').addClass('.none');
		$('#learn').hide();
});
/**
 * Question 5:
* If a user clicks "Do Not Learn":
 * Have the extra <p> slide up and hide the "Do Not Learn" link using $.slideUp() and $.hide()
 * Show the "Read More" link using $.show()
 */
	$('.less').on('click', function(){
		$('p-sidebar').slideUp(600);
		$('.none').hide();
		$('#learn').show();
});







