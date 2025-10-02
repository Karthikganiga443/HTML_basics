window.onload = function () {
    let nameFromStorage = localStorage.getItem("UserName");
    if (nameFromStorage) {
        document.getElementById("user_name").innerText = nameFromStorage;
    } else {
        document.getElementById("user_name").innerText = "Guest";
    }
};

function Preview() {
    var fName = document.getElementById("fname").value.trim();
    var lName = document.getElementById("lname").value.trim();
    var phoneNumber = document.getElementById("phonenumber").value.trim();
    var DOB = document.getElementById("birthdate").value;
    
    var gender = document.getElementsByName("gender");
    var genderValue = "";
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value;
            break;
        }
    }


    var Flightbooked = document.getElementById("flightrupees").value;
    var FlightRupees = Flightbooked !== "0" ? parseInt(Flightbooked.match(/\d+/)[0]) : 0;

    var Deptdate = document.getElementById("dept_date").value;

    var foodBooked = document.getElementById("foodrupees").value;
    var foodRupees = foodBooked !== "0" ? parseInt(foodBooked.match(/\d+/)[0]) : 0;

    var TotalPrice = FlightRupees + foodRupees;

    if (!fName || !lName || !phoneNumber || !DOB || !genderValue || Flightbooked === "0" || foodBooked === "0" || !Deptdate) {
        alert("Please fill in all required fields before continuing.");
        return;
    }

    localStorage.setItem("fName", fName);
    localStorage.setItem("lName", lName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("DOB", DOB);
    localStorage.setItem("gender", genderValue);
    localStorage.setItem("Flightbooked", Flightbooked);
    localStorage.setItem("FlightRupees", FlightRupees);
    localStorage.setItem("Deptdate", Deptdate);
    localStorage.setItem("foodBooked", foodBooked);
    localStorage.setItem("foodRupees", foodRupees);
    localStorage.setItem("TotalPrice", TotalPrice);

    window.location.href = "bill.html";
}
