const Smallbtn = (style, onClick, Children) => {
  return (
    <button style={style} onClick={onClick}>
      {Children}
    </button>
  );
};
export default Smallbtn;
