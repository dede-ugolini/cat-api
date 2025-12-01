function CatImage({ cat }) { // { cat } é a desestruturação do objeto
  if (!cat?.url) return null;

  return (
    <img
      src={cat.url}
      style={{
        maxHeight: '300px',
        maxWidth: '300px',
        objectFit: 'contain'
      }}
    />
  );
}

export default CatImage;
