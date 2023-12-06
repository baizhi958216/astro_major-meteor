import { useState } from "react";

export default function TheReact() {
    const [foo, setFoo] = useState('React No😡!!!')
    return (
        <div>
            <h1 onClick={() => setFoo('React Yes🥰!!!')}>{foo}</h1>
        </div>
    );
}