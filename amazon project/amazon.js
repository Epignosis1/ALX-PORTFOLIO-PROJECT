function display() {
  deliver.style.display = "block";
  document.bodyaddEventListener("click", disappear);
  event.stopPropagation();
}
function disappear(event) {
  if (deliver.style.display === "block") {
    deliver.style.display = "none";
    document.removeEventListener("click", disappear);
  }
}
