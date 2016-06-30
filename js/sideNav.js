function navCtrl() {
  if (document.getElementById("logo").style.marginLeft == "50px")
  {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("logo").style.marginLeft = "250px";
  }
  else if (document.getElementById("logo").style.marginLeft == "250px")
  {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("logo").style.marginLeft= "50px";
  }
}
