const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const reducerCustomer = (state = initialStateCustomer, action) => {
  const { type, payload } = action;

  switch (type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: payload.fullName,
        nationalID: payload.nationalID,
        createdAt: payload.createdAt,
      };
    case "account/updateName":
      return {
        ...state,
        fullName: payload,
      };
    default:
      return state;
  }
};

export default reducerCustomer;
