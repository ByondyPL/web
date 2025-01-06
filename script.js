// Add Text to Canvas
function addText() {
    const canvas = document.getElementById("canvas");
    const textElement = document.createElement("div");
    textElement.contentEditable = true;
    textElement.innerText = "KONTOL";
    textElement.style.top = "50px";
    textElement.style.left = "50px";
    textElement.style.color = "#000";
    textElement.draggable = true;
  
    textElement.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", JSON.stringify({ top: e.target.offsetTop, left: e.target.offsetLeft }));
    });
  
    textElement.addEventListener("dragend", (e) => {
      const data = JSON.parse(e.dataTransfer.getData("text/plain"));
      e.target.style.top = `${data.top + e.offsetY}px`;
      e.target.style.left = `${data.left + e.offsetX}px`;
    });
  
    canvas.appendChild(textElement);
  }
  
  // Add Image to Canvas
  function addImage() {
    const canvas = document.getElementById("canvas");
    const imgElement = document.createElement("img");
    imgElement.src = "https://via.placeholder.com/150";
    imgElement.style.width = "150px";
    imgElement.style.top = "50px";
    imgElement.style.left = "50px";
    imgElement.style.position = "absolute";
    imgElement.draggable = true;
  
    imgElement.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("image/plain", JSON.stringify({ top: e.target.offsetTop, left: e.target.offsetLeft }));
    });
  
    imgElement.addEventListener("dragend", (e) => {
      const data = JSON.parse(e.dataTransfer.getData("image/plain"));
      e.target.style.top = `${data.top + e.offsetY}px`;
      e.target.style.left = `${data.left + e.offsetX}px`;
    });
  
    canvas.appendChild(imgElement);
  }
  
  // Change Canvas Background Color
  function changeBackgroundColor() {
    const color = document.getElementById("colorPicker").value;
    document.getElementById("canvas").style.backgroundColor = color;
  }