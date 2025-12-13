function detect(){
  const input = document.getElementById("url");

  if(!input){
    alert("Input URL tidak ditemukan");
    return;
  }

  const url = input.value.trim();

  if(url === ""){
    alert("Masukkan link video");
    return;
  }

  if(url.includes("tiktok.com")){
    window.open(
      "https://www.tikwm.com/video/media/hdplay?url=" + encodeURIComponent(url),
      "_blank"
    );
  }
  else if(url.includes("instagram.com")){
    window.open("https://igram.world/en/", "_blank");
  }
  else if(url.includes("facebook.com") || url.includes("fb.watch")){
    window.open("https://fdownloader.net/", "_blank");
  }
  else if(url.includes("youtube.com") || url.includes("youtu.be")){
    window.open("https://yt1s.com/", "_blank");
  }
  else{
    alert("Platform tidak dikenali");
  }
}
