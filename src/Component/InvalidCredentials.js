import React from "react";
import { useNavigate } from "react-router-dom";


function InvalidCredentials(){
    
    let navigate = useNavigate()
    function RedirectLogin(){
        navigate('/',true)
    }

    return(
        <>
<p className="invalidcredentials">Page you are looking for does'nt exist .</p>
<form>
    <button className="invalid" onClick={RedirectLogin}> Again Login </button>
</form>
</>
    )
}

export default InvalidCredentials;