function DinoImage({ dino, page }) {
  const currentDino = dino[page];

  if (!currentDino?.image) {
    console.log("Dino is null");
    return null;
  }
  return (
    <img
      src={currentDino.image}
      alt={currentDino.name || "dino"}
      style={{
        maxHeight: '300px',
        maxWidth: '300px',
        objectFit: 'contain'
      }}
    />
  );
}

export default DinoImage;
