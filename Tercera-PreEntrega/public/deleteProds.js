function deleteProd(prodId) {
  // let prodId = e.target.value;
  console.log(prodId)
  fetch(window.location.href + "/producto/" + prodId, {
    method: "DELETE",
  }).then((res) => location.reload()); // or res.json()
}
