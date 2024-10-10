import React from 'react';
import NavbarHome from "../../components/Navbar/Navbar";
import Background from "./components/Background/Background";

export default function Home() {
    return (
        <>
            <NavbarHome />
            <Background />
                {/*<div>
                    <Button
                        color={"green"}
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </Button>
                    <span>{count}</span>
                    <Button
                        color={"red"}
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </Button>
                </div>*/}
        </>
    )
}