const Meme = ({ meme }) => {
  const { header, footer, image } = meme;

  return image ? (
    <div className="meme" id="memeGenerator">
      <div className="meme_text meme_header">{header}</div>
      <div className="meme_text meme_footer">{footer}</div>
      <img src={`/templates/${image}.jpg`} alt={image} />
    </div>
  ) : (
    <div className="meme">Seleccionar un meme tu debes</div>
  );
};

export default Meme;