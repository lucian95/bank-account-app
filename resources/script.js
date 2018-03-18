(function() {
  document.getElementById('view-account-button').onclick = function() {
    document.getElementById('main-menu-div').hidden = true;
    document.getElementById('view-account-div').hidden = false;
  };

  document.getElementById('request-account-button').onclick = function() {
    document.getElementById('main-menu-div').hidden = true;
    document.getElementById('request-account-div').hidden = false;
  };

  let buttons = document.getElementsByClassName('return-to-menu-button');
  for (let button of buttons) {
    button.onclick = function() {
      // It does not matter specifically which div is clicked
      document.getElementById('request-account-div').hidden = true;
      document.getElementById('view-account-div').hidden = true;
      document.getElementById('main-menu-div').hidden = false;
    };
  }
})()
