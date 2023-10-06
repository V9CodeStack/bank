export const deposit = (amount, currency) => async (dispatch) => {
  if (currency === "USD") {
    dispatch({
      type: "account/deposit",
      payload: amount,
    });
  } else {
    dispatch({ type: "account/convertingCurrency" });
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`;
    const response = await fetch(url);
    const data = await response.json();
    const coverted = data.rates.USD;
    dispatch({
      type: "account/deposit",
      payload: coverted,
    });
  }
};

export const withdraw = (amount) => async (dispatch) => {
  dispatch({
    type: "account/withdraw",
    payload: amount,
  });
};

export const requestLoan = (amount, purpose) => async (dispatch) => {
  dispatch({
    type: "account/requestLoan",
    payload: { amount, purpose },
  });
};

export const payLoan = () => async (dispatch) => {
  dispatch({
    type: "account/payLoan",
  });
};

export const createCustomer = (fullName, nationalID) => async (dispatch) => {
  dispatch({
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  });
};

export const updateName = (fullName) => async (dispatch) => {
  dispatch({
    type: "account/updateName",
    payload: fullName,
  });
};
