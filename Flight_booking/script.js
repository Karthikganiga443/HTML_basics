let generatedOTP;

function sendOTP() {
    (function () {
            emailjs.init("hqutN46OkHSt0Q_Da");
        })();
    var UserName = document.getElementById("username").value;
    const emailPattren = /^[a-z0-9._+-]+@[a-z]+\.[a-z]{3}$/;
    if (emailPattren.test(UserName)==false) {
        alert("Enter Valid Username");
        return
    }
    localStorage.setItem("UserName", UserName);
    generatedOTP = Math.floor(100000 + Math.random() * 900000);
    var templateparms = {
            to_email: UserName,
            otp: generatedOTP
        }
        
    emailjs.send("service_vj0nmam", "template_vunfhny", templateparms).then(function (response) {
        alert("OTP sent to " + UserName);
    }, function (error) {
        alert("failed to send OTP: " + JSON.stringify(error));
    })
}

function verifyOTP() {
    var Otp = document.getElementById("enteredotp").value;
    if (Otp == generatedOTP) {
        alert("OTP verified! Login Successfull!");
        window.location.href = "main.html";
    } else {
        alert("Invalid OTP, please try again.");
    }
}
