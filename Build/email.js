// JavaScript source code
//MOVE THIS FILE TO THE BUILD FOLDER AFTER YOUVE BUILT THE WEB APP IN UNITY!

function sendOutAnEmail(subjectToSend, bodyToSend) {
      //This variable below is a straight up copy of https://smtpjs.com/v3/smtp.js
	//Probably no need to tamper with (or understand) it
    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    
	//Code snippet below directly from https://smtpjs.com/
	//MODIFY THE STRINGS BELOW TO MATCH WHATEVER EMAIL SERVER+CREDENTIALS YOU WANT TO USE FOR SENDING EMAILS!!
    //The security token below was generated at smtpjs.com using smtp.gmail.com, chair.spraguecas.com, gmail.com, and port 587
    Email.send({
        SecureToken : "6accdab5-09a1-4e81-9788-9669a1877bce",
        To : 'tzytmkqv@robot.zapier.com',
        From : "chair.spraguecas@gmail.com",
		Subject : subjectToSend,
		Body : bodyToSend
		//Subject : "This is the subject",
        //Body : "And this is the body"
	//tzytmkqv@robot.zapier.com
//6accdab5-09a1-4e81-9788-9669a1877bce
//old token 24532be4-bf07-43e8-8e58-a4a59680d598
    });    
}
//}).then(
    //    message => alert(message)