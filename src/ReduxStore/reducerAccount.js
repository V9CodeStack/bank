const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const reducerAccount = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "account/deposit":
      return { ...state, balance: state.balance + payload, isLoading: false };
    case "account/withdraw":
      return { ...state, balance: state.balance - payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: payload.amount,
        loanPurpose: payload.purpose,
        balance: state.balance + payload.amount,
      };
    case "account/payLoan":
      if (state.loan > 0) return state;
      return { ...state, loanPurpose: "", balance: state.balance - state.loan };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default reducerAccount;
