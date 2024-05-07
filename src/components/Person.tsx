type PersonProp = {
    name :{
        first : string,
        last : string
    },
}



export const Person = (props : PersonProp) =>{
    return(
        <>
        <p>List of country which I want to visit</p>
        <p>{props.name.first} at {props.name.last} </p>
        </>
    )
}