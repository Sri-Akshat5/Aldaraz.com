function slide(){
    let slideValue = document.getElementById("slider_bar").value;
    document.getElementById("spliter_second_image").style.clipPath = "polygon(0 0,"+ slideValue + "% 0," + slideValue + "% 100% ,0 100%)";
    console.log("polygon(0 0,"+ slideValue + "% 0," + slideValue + "% 100% ,0 100%)");
}
function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  } 