const SectionBtn = (Style, onClick, Children) => {
  return (
    <button style={Style} onClick={onClick}>
      {Children}
    </button>
  );
};

export default SectionBtn;
