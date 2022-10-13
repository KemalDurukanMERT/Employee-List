const Objects = (data) => {
  const { name, age, image, email } = data;
  
  return (
    <div className="object d-flex">
      <img src={image} alt="" />
      <div className="info">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Objects;
