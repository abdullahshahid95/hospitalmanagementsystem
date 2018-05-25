function printDetails()
{
    document.querySelector('form.patientform').addEventListener('submit', function (e){
        e.preventDefault();
    });

    console.clear();
    alert("Open Console");
    var patientName = document.getElementById("name").value;
    var fatherHusbandName = document.getElementById("fatherhusbandname").value;

    //Get current Date and Time
    var today = new Date();
    var date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var nic = document.getElementById("nic").value;
    var ward = document.getElementById("ward").value;
    var illnessValue = document.getElementById("ilness").value;
    var doctorValue = document.getElementById("doctor").value;

    var appointmentTime = document.getElementById("appointmenttime").value;
    var appointmentfees = document.getElementById("appointmentfees").value;
    var payment = document.getElementById("payment").value;
    var recieved = document.getElementById("recieved").value;

    console.log("-->Patient Details<--")
    console.log("Patient Name: " + patientName);
    console.log("Father/Husband Name: " + fatherHusbandName);
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("NIC: " + nic);
    console.log("Ward: " + ward);

    var ilness;
    if(illnessValue == 1)
        ilness = "Fever";
    
    else if(illnessValue == 2)
        ilness = "Flu";

    else if(illnessValue == 3)
        ilness = "Bp";
    
    else if(illnessValue == 4)
        ilness = "Diabetes";
    
    else
        ilness = "Unrecognized";
    
    var doctor;
    if(doctorValue == 1)
        doctor = "Akram";
    
    else if(doctorValue == 2)
        doctor = "Adil";

    else if(doctorValue == 3)
        doctor = "Shahid";
    
    else if(doctorValue == 4)
        doctor = "Saleh";
    
    else
        doctor = "Unrecognized";
    
    console.log("Ilness: " + ilness);
    console.log("Doctor: " + doctor);

    console.log("\n");

    console.log("-->Appointment Details<--")
    console.log("Appoinement Time: " + appointmentTime);
    console.log("Fees: " + appointmentfees);
    console.log("Payment Option: " + payment);
    if(recieved == 1)
        console.log("Recieved: Yes");
    
    else if(recieved == 2)
        console.log("Recieved: No");
}