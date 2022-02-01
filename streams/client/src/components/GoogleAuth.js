import React from "react";

class GoogleAuth extends React.Component {
componentDidMount () {
    window.gapi.load('client:ai=uth2', () => {
        window.gapi.client.init({
            
        })
    })
}

    render () {
        return <div>Google Auth</div>
    }
}
export default GoogleAuth