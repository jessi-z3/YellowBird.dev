const xhr = new XMLHttpRequest();
xhr.addEventListener()
xhr.open("POST", "https://yellowbird.dev/pledges.json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr

xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send(body);
