document.getElementById("imageUpload").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      alert("Image loaded! Next step: convert to voxel model.");
    };
    document.body.appendChild(img);
  }
});
