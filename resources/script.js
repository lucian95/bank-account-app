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
  







  document.getElementById('submit-withdraw').onclick = function(e) {
    // Make withdraw required before submitting form
    document.getElementById('withdraw-amount').required = true;

    if (document.getElementById('returned-account-form').reportValidity())  {

      let xhr = new XMLHttpRequest();

      // Handle response
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          
          displayAccount(JSON.parse(this.responseText).value);
        } else if (this.readyState == 4 && this.status == 404) {
          console.log('Something went wrong, see the response for more details: ', this);
        }
      };

      let accountNumber = document.getElementById('account-number').value;
      let withdrawAmount = document.getElementById('withdraw-amount').value;
      let params = 'accountNumber=' + accountNumber + '&withdrawAmount=' + withdrawAmount;
      xhr.open('POST', '/withdraw', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(params);

    }

    // Remove required so it does not stay required forever
    document.getElementById('withdraw-amount').required = false;
  };










  document.getElementById('submit-deposit').onclick = function(e) {
    // Make deposit required before submitting form
    document.getElementById('deposit-amount').required = true;

    if (document.getElementById('returned-account-form').reportValidity())  {

      let xhr = new XMLHttpRequest();

      // Handle response
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          displayAccount(JSON.parse(this.responseText).value);
        } else if (this.readyState == 4 && this.status == 404) {
          console.log('Something went wrong, see the response for more details: ', this);
        }
      };

      let accountNumber = document.getElementById('account-number').value;
      let depositAmount = document.getElementById('deposit-amount').value;
      let params = 'accountNumber=' + accountNumber + '&depositAmount=' + depositAmount;
      xhr.open('POST', '/deposit', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(params);

    }
    // Remove required so it does not stay required forever
    document.getElementById('deposit-amount').required = false;
  };









  function displayAccount(accountInfo) {
    document.getElementById('query-account-div').hidden = true;
    document.getElementById('view-account-div').hidden = false;

    document.getElementById('returned-account-number').value = accountInfo.accountNumber;
    document.getElementById('returned-first-name').value = accountInfo.firstName;
    document.getElementById('returned-last-name').value = accountInfo.lastName;
    document.getElementById('returned-balance').value = accountInfo.balance;
    document.getElementById('withdraw-amount').value = '';
    document.getElementById('deposit-amount').value = '';
    // Set validity constraint based on balance
    document.getElementById('withdraw-amount').max = accountInfo.balance;
  }

  document.getElementById('view-another-account').onclick = function() {
    document.getElementById('query-account-div').hidden = false;
    document.getElementById('view-account-div').hidden = true;
  }
})()
