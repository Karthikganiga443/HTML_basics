var price = document.getElementById("price");
var paymentdoing = document.getElementById("payment");
var audiosucess = document.getElementById("sucessaudio");
var totalprice = document.getElementById("totalprice");
var inputquantity = document.getElementsByClassName("item");
let customerName = document.getElementById("customername");
let tableNumber = document.getElementById("tablenumber");

let pdf = null;

function totalconfirm() {
    var y = 65;
    const { jsPDF } = window.jspdf;
    pdf = new jsPDF();

    pdf.text("The Global Plate Restaurant", 70, 10);
    pdf.text("Thank you for visiting!!!", 80, 17);
    pdf.text("Malleshwaram, Bangalore", 75, 24);
    pdf.text("--------------------------------------------------------------------------------------", 20, 31);
    if (!customerName.value){
        alert("please Enter Your Name!!!");
        return;
    }
    pdf.text(`Name : ${customerName.value}`,20,38);
    pdf.text("|",100,38);
    if (!tableNumber.value){
        alert("Please Select the Table!!!");
        return;
    }
    pdf.text(`Table number : ${tableNumber.value}`,130,38)
    pdf.text("--------------------------------------------------------------------------------------", 20, 45);
    pdf.text("Dishes", 20, 51);
    pdf.text("QTY", 150, 51);
    pdf.text("Price", 165, 51);
    pdf.text("--------------------------------------------------------------------------------------", 20, 58);

    let total = 0;

    for (let i = 0; i < inputquantity.length; i++) {
        const qty = parseInt(inputquantity[i].value);
        if (qty > 0) {
            const itemPrice = parseInt(inputquantity[i].getAttribute("itemprice"));
            const itemName = inputquantity[i].getAttribute("itemname");
            const itemTotal = qty * itemPrice;
            total += itemTotal;

            pdf.text(`${itemName}`, 20, y);
            pdf.text(`${qty}`, 152, y);
            pdf.text(`${itemTotal}`, 167, y);
            y += 7;
        }
    }

    if (total === 0) {
        alert("Please Select Your Dish and Proceed!!!");
        pdf = null;
        return;
    }

    pdf.text("---------------------------------------------------------------------------------------", 20, y);
    y += 7;
    pdf.text("Sub Total", 20, y);
    pdf.text(`${total} rps`, 167, y);

    totalprice.innerHTML = `\u20B9${total}/-`;
    price.showModal(); // Show payment dialog
}


function paymentdone() {
    price.close();
    paymentdoing.showModal();
    audiosucess.play();

    if (pdf) {
        pdf.save("Hotel_Bill.pdf"); // ✅ generate PDF here after payment
    }
}

function popupclose() {
    paymentdoing.close();
}
