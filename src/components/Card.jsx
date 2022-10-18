const Card = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const { id,image, name, email, age } = person;
        return (
          <div key={id} className="container d-flex flex-row my-3 ">
            <img src={image} alt="" className="mx-3 rounded-circle"/>
            <div className="info">
              <h1>{name}</h1>
              <p>{email}</p>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
