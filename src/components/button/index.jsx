export const Button = ({ className, func, children }) => {
  return (
    <button className={className} onClick={func}>
      {children}
    </button>
  );
};
