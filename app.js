// Function to toggle display of nav on click
function toggleNav()
{
  if (document.getElementById('navigation').className == "nav-hidden") {
    document.getElementById('navigation').setAttribute("class", "nav-shown");
  }
  else {
    document.getElementById('navigation').setAttribute("class", "nav-hidden");
  }
}
