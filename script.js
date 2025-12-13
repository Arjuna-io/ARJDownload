function detect(){
  const input = document.getElementById("url");
  if(!input){
    alert("Input tidak ditemukan");
    return;
  }

  const url = input.value.trim();
  if(url === ""){
    alert("Masukkan link video");
    return;
  }

  navigator.clipboard.writeText(url);

  if(url.includes("tiktok.com")){
    window.open(
      "https://www.tikwm.com/video/media/hdplay?url=" + encodeURIComponent(url),
      "_blank"
    );
  }
  else if(url.includes("instagram.com")){
    alert("Link disalin. Tempelkan di igram.world");
    window.open("https://igram.world/en/", "_blank");
  }
  else if(url.includes("facebook.com") || url.includes("fb.watch")){
    alert("Link disalin. Tempelkan di fdownloader");
    window.open("https://fdownloader.net/", "_blank");
  }
  else if(url.includes("youtube.com") || url.includes("youtu.be")){
    alert("Link disalin. Tempelkan di yt1s");
    window.open("https://yt1s.com/", "_blank");
  }
  else{
    alert("Platform tidak dikenali");
  }
}
