
function gotDob() {
    const dobinpbox = document.getElementById("dobdate").value;
    const ctinpbox = document.getElementById("ctdate").value;


    if (!dobinpbox || !ctinpbox) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    let dob = new Date(dobinpbox)
    let ctdate = new Date(ctinpbox)


    if (isNaN(dob) || isNaN(ctdate)) {
        alert("Please enter valid dates.");
        return;
    }


    let age = ctdate.getFullYear() - dob.getFullYear()
    let month = ctdate.getMonth() - dob.getMonth()
    const dayDiff = ctdate.getDate() - dob.getDate();

    if (month < 0 || (month === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('currentAge').textContent = `Your are ${age} years and ${month} months and ${dayDiff} days old.`;
}