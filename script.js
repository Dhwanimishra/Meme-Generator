const canvas = document.getElementById("memeCanvas");
const ctx = canvas.getContext("2d");
let image = new Image();

document.getElementById("imageInput").addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function () {
    image.src = reader.result;
  };
  reader.readAsDataURL(this.files[0]);
});

image.onload = function () {
  canvas.width = image.width;
  canvas.height = image.height;
  drawMeme();
};

function drawMeme() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);

  const topText = document.getElementById("topText").value.toUpperCase();
  const bottomText = document.getElementById("bottomText").value.toUpperCase();

  ctx.font = `${canvas.width / 10}px Impact`;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.textAlign = "center";

  ctx.fillText(topText, canvas.width / 2, canvas.height * 0.1);
  ctx.strokeText(topText, canvas.width / 2, canvas.height * 0.1);

  ctx.fillText(bottomText, canvas.width / 2, canvas.height * 0.95);
  ctx.strokeText(bottomText, canvas.width / 2, canvas.height * 0.95);
}

function generateMeme() {
  drawMeme();
}

function downloadMeme() {
  const link = document.createElement("a");
  link.download = "meme.png";
  link.href = canvas.toDataURL();
  link.click();
}
