import React from "react";

const HomeLayout = (props) => {
    return(
        <>
            <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
        </>
    );
};

export default HomeLayout;