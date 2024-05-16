const contentDiv = document.getElementById("content-container");

parseUrl();

function parseUrl() {
  if (location.search === "?dog") {
    localStorage.setItem("dogUrl", "images/dog.jpg");
  }
  if (location.search === "?rat") {
    localStorage.setItem("ratUrl", "images/rat.jpg");
  }
}

const dogUrl = localStorage.getItem("dogUrl");
const ratUrl = localStorage.getItem("ratUrl");

if (dogUrl || ratUrl) {
  contentDiv!.innerText = "";
}


if (dogUrl) {
  const imgDiv = getImage(dogUrl);
  contentDiv?.appendChild(imgDiv);
}

if (ratUrl) {
  const imgDiv = getImage(ratUrl);
  contentDiv?.appendChild(imgDiv);
}

function getImage(imageUrl: string) {
  const img = new Image();
  img.src = imageUrl;
  return img;
}

