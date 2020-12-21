function isMobile() {
    return(
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      navigator.userAgent.match(/webOS/i)
    );
  }
  
  function isSafari() {
    return navigator.vendor.match(/Apple/i);
  }
  
  function isAndroid() {
    return(
      navigator.userAgent.match(/Android/i)
    );
  }
  
  function isIOS() {
    return(
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i)
    );
  }
  
  export default { isMobile, isSafari, isAndroid, isIOS };