//init
 log("start");

//bind
 $("#button_1").click(function(){log("hoge")});

 $("#button_2").click(button2Action);

//end
	log("end");

//functions
function button2Action(){
	log("hoge2")}

function log (logmessage) {
	console.log(logmessage);
}