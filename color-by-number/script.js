const uploadInput = document.getElementById("imageUpload");
const viewer = document.getElementById("viewer");
const statusText = document.getElementById("status");
let activePreviewUrl = null;

uploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (!file) {
    statusText.textContent = "No image selected.";
    return;
  }

  if (activePreviewUrl) {
    URL.revokeObjectURL(activePreviewUrl);
  }

  activePreviewUrl = URL.createObjectURL(file);
  const preview = document.createElement("img");
  preview.src = activePreviewUrl;
  preview.alt = `Preview of ${file.name}`;

  viewer.replaceChildren(preview);
  statusText.textContent = `${file.name} loaded. Voxel conversion is the next build step.`;
});
