.container-fluid{
	margin: 0;
	padding: 0;
}

.navbar{
	border-radius: 0px;
	background-color: rgba(0,0,0,0.8);
}

.navbar-brand{
  font-size: 35px;
  color: white;
  padding-left: 25px;
}

.navbar-brand:hover{
	color: white;
}

.nav{
	margin: 0;
	padding: 0;
}

.navbar-nav{
  font-size: 25px;
  text-align: center;
  margin: 0;
  padding: 0;
}

.navbar-toggle{
	border: 2px solid white;
	margin-right: 25px;
}

.icon-bar{
	background-color: white;
}


.main-title{
  margin-bottom: 15px;
  text-align: center;
  color: #ff4532;
  font-size: 50px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-weight: bold;
}

li{
	box-sizing: border-box;
	width: 100%;
}

// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.


// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;


(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);