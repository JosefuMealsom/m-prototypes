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
  img.classList.add('contain');
  img.classList.add('h-full');
  img.classList.add('w-full');
  img.classList.add('gap-2');
  return img;
}

