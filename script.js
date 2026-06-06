const svg = document.querySelector("svg");

for(let i = 0; i < 30; i++){

    const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    text.innerHTML = `
        <textPath href="#heart" startOffset="${i * 3.3}%">
            I love you
            <animate
                attributeName="startOffset"
                from="${i * 3.3}%"
                to="${i * 3.3 + 100}%"
                dur="10s"
                repeatCount="indefinite"
            />
        </textPath>
    `;

    svg.appendChild(text);
}
