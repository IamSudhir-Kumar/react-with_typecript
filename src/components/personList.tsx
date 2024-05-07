type PersonList = {
  name: {
    first: string;
    last: string;
  }[];
};

export const personList = (props: PersonList) => {
  return (
    <>
     {props.name.map(name => {
        return (
          <div>
            <p>List of country which I want to visit</p>
            <p>
              {name.first} at {name.last}
            </p>
          </div>
        );
     })}
    </>
  );
};
