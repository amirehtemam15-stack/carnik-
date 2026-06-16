function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    drawer.style.right = drawer.style.right === "0px" ? "-250px" : "0px";
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registered successfully"))
    .catch(err => console.error("Service Worker registration failed:", err));
}