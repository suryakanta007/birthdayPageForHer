
import UserCard from "./components/UserCard";
import specialHoook from "./hooks/specialHoook.js";


export const App = () => {
    const {dog,loding,error} = specialHoook();
    if(loding){
        return (<h1>Loding....</h1>)
    }
    if(error){
        return (<h1>somthing went Wrong with featching dog name.</h1>)
    }
    return (
        <div>
            <h1>React with cohort.</h1>
            <UserCard/>
            <h1>Dog name is {dog.name}</h1>
        </div>
    )
}