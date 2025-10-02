let total;
let previewdetails, paymentQR, paymentsuccess, audiosuccess;
let billtoPDF;

window.onload = function() {
    const nameFromStorage = localStorage.getItem("UserName");
    const fName = localStorage.getItem("fName");
    const lName = localStorage.getItem("lName");
    const phone = localStorage.getItem("phoneNumber");
    const DOB = localStorage.getItem("DOB");
    const flight = localStorage.getItem("Flightbooked");
    const food = localStorage.getItem("foodBooked");
    const deptDate = localStorage.getItem("Deptdate");
    total = localStorage.getItem("TotalPrice");

    previewdetails = document.getElementById("container1");
    paymentQR = document.getElementById("paymentQr");
    paymentsuccess = document.getElementById("payment");
    audiosuccess = document.getElementById("sucessaudio");
    billtoPDF = document.querySelector("section.container");

    
    previewdetails.innerHTML = `<div class="w-75 d-flex justify-content-between mt-4 align-items-center">
            <h1 class="display-3 text-danger fw-bolder  text-shadow ">AIR INDIA</h1>
            <img class="rounded-pill"
                src="https://static.theprint.in/wp-content/uploads/2025/02/Untitled-design-4-1-1024x576.jpg" alt="plane"
                width="150">
        </div>
        <hr>
        <h3 class="mb-3">Personal and Travel Details</h3>
        <h5>Name: ${fName} ${lName}</h5>
        <h5>Phone Number: ${phone}</h5>
        <h5>Email Address: ${nameFromStorage}</h5>
        <h5>Date of Birth: ${DOB}</h5>
        <h5>From Origin To Destination: ${flight}</h5>
        <h5>Departure Date: ${deptDate}</h5>
        <h5>Food Selected: ${food}</h5>
        <h5>Total amount: &#8377; ${total}</h5>
        <center class="mt-3"><h2>Thank You for Flying With Us!!!</h2>
        <div class="logo"><img class="rounded-pill"
                src="./flight.png" alt="plane"
                width="200">
                <h2 class="text-danger fw-bold moved">AIR INDIA</h2></div></center>
        
    `;
}


function toPay() {
    const totalamount = document.getElementById("totalamt");
    totalamount.innerText = total;
    paymentQR.showModal();
}


function paid() {
    paymentQR.close();
    paymentsuccess.showModal();
    audiosuccess.play();
}


function GeneratePDF() {
   
    paymentsuccess.close();
    html2pdf().set({
            margin: 10,
            filename: 'Transaction_details_AIR_INDIA.pdf',
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).from(billtoPDF).save();
}

