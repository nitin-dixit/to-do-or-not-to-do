export const Button = ({ children, id, type = "button", ...rest }) => {
  return (
    <>
      <button id={id} type={type} {...rest}>
        {children}
      </button>
    </>
  );
};

export const SelectButton = ({ children, id, ...rest }) => {
  return (
    <>
      <select id={id} {...rest}>
        {children}
      </select>
    </>
  );
};
