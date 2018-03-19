(function() {
  'use strict';

  document.getElementById('submit-account-number').onclick = function(e) {

    if (document.getElementById('query-account-form').reportValidity())  {

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          displayAccount(JSON.parse(this.responseText));
        } else if (this.readyState == 4 && this.status == 404) {
          console.log('Something went wrong, see the response for more details: ', this);
        }
      };

      let accountNumber = document.getElementById('account-number').value;
      xhr.open('GET', '/view-account?accountNumber=' + accountNumber, true);
      xhr.send();

    }
  };

  function displayAccount(accountInfo) {
    document.getElementById('query-account-div').hidden = true;
    document.getElementById('view-account-div').hidden = false;

    document.getElementById('returned-account-number').value = accountInfo.accountNumber;
    document.getElementById('returned-first-name').value = accountInfo.firstName;
    document.getElementById('returned-last-name').value = accountInfo.lastName;
    document.getElementById('returned-balance').value = accountInfo.balance;
  }

  document.getElementById('view-another-account').onclick = function() {
    document.getElementById('query-account-div').hidden = false;
    document.getElementById('view-account-div').hidden = true;
  }
})()
