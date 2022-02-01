import CompA from "./CompA"
import React from "react"

export const UserContext = React.createContext()

function App () {
return (
    <UserContext.Provider value={"hessamtaheri"}>
    <CompA />    
    </UserContext.Provider>
)
}
export default App