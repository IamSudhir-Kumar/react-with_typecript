type GreetProps = {
    name : string,
    age : number,
    loggedIn : boolean,
}

const Greet = (props : GreetProps) => {
  return (
    <div>
        <h1>
          {
            props.loggedIn
            ? `Welcome , I am ${props.name} and I am ${props.age}` : `Welcome Guest`          }
        </h1>
    </div>
  )
}

export default Greet