let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// Log out the items in the myLeads array using a for loop 
let text = "";
for (let i = 0; i < myLeads.length; i++) {
  text += myLeads[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;