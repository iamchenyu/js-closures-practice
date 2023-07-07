// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:

// checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
// deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
// withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
// changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)

function createAccount(pin, amount = 0) {
  const checkBalance = function (input) {
    if (input === pin) {
      return `$${amount}`;
    } else {
      return "Invalid PIN.";
    }
  };

  const deposit = function (input, depositAmount) {
    if (input === pin) {
      amount = amount + depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
    } else {
      return "Invalid PIN.";
    }
  };

  const withdraw = function (input, withdrawAmount) {
    if (input === pin) {
      if (withdrawAmount <= amount) {
        amount = amount - withdrawAmount;
        return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
      } else {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
    } else {
      return "Invalid PIN.";
    }
  };

  const changePin = function (input, newPin) {
    if (input === pin) {
      pin = newPin;
      return "PIN successfully changed!";
    } else {
      return "Invalid PIN.";
    }
  };

  return {
    checkBalance,
    deposit,
    withdraw,
    changePin,
  };
}

module.exports = { createAccount };
