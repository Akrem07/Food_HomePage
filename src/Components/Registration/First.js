import React from "react";

const First = () => {


    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }


    return (
        <div>
            <h1>First</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
};
export default First;