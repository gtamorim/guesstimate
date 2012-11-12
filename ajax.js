 $(document).ready(function(){
	$("#sendmail").click(function(){
		var valid = '';
		var isr = ' is required.';
		var name = $("#name").val();
		var mail = $("#mail").val();
		var comment = $("#comment").val();
		var ip = $("#ip").val();
		var ComputersNumber = $("#ComputersNumber").val();
		var ServersNumber = $("#ServersNumber").val();
		var ScreensNumber = $("#ScreensNumber").val();
		var MsOfficeNumber = $("#MsOfficeNumber").val();
		var MsExchangeNumber = $("#MsExchangeNumber").val();
		var SwitchesNumber = $("#SwitchesNumber").val();
		var RoutersNumber = $("#RoutersNumber").val();
		var TotalForTwoYears = $("#TotalTWOyears").val();
		var TotalForTHREEYears = $("#TotalTHREEyears").val();
		var TotalForFIVEYears = $("#TotalFIVEyears").val();
		var ComputerType = $("#ComputerType").val();
		var ServerType = $("#ServerType").val();
		var ScreenType =  $("#ScreenType").val();
		var acceptTerm = $('#AcceptedRadio').val();
                
//		var subject = $("#subject").val();
//		var text = $("#text").val();
		if (name.length<1) {
			valid += '<br />Name'+isr;
		}
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />A valid Email'+isr;
		}
		if (acceptTerm!=1) {
			valid += '<br />Please accept the terms and conditions.';
		}
//		if (subject.length<1) {
//			valid += '<br />Subject'+isr;
//		}
//		if (text.length<1) {
//			valid += '<br />Text'+isr;
//		}
		if (valid!='') {
			$("#response").fadeIn("slow");
			$("#response").html("Error:"+valid);
		}
		else {                     
                        var datastr ='name=' + name + 
                                     '&mail=' + mail + 
                                     '&comment=' + comment + 
									 '&ip=' + ip +
                                     '&Computers_Number=' + ComputersNumber +
                                     '&Servers_Number=' + ServersNumber +
                                     '&Screens_Number=' + ScreensNumber +
                                     '&MsOffice_Number=' + MsOfficeNumber +
                                     '&MsExchange_Number=' + MsExchangeNumber +
                                     '&Switches_Number=' + SwitchesNumber +
                                     '&Routers_Number=' + RoutersNumber +
                                     '&TotalFor_Two_Years=' + TotalForTwoYears +
                                     '&TotalFor_THREE_Years=' + TotalForTHREEYears +
                                     '&TotalFor_FIVE_Years=' + TotalForFIVEYears +
                                     '&ComputerType=' + ComputerType +
                                     '&ServerType=' + ServerType +
                                     '&ScreenType=' + ScreenType;// + '&text=' + text;
			$("#response").css("display", "block");
			$("#response").html("<img src='images/ajax-loader.gif' style='background: transparent;display:inline-block;float:left;'/><div class='sndMsgLoad'>Sending message ....</div>");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});
});
function send(datastr){
	$.ajax({	
		type: "POST",
		url: "mail.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#response").fadeIn("slow");
		$("#response").html(html);
		setTimeout('$("#response").fadeOut("slow")',2000);
	}
	});
}
