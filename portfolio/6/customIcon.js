export function getCustomIcon(text, animationClass) {
    const charArray = text.split('').map(char => `<span>${char}</span>`).join('');
    const duplicatedText = charArray + charArray; // Duplicate the text for continuous animation
    const containerHeight = text.length; // Assuming each character takes 15px height

    return L.divIcon({
        className: `animated-marker ${animationClass}`,
        html: `
            <div class="moving-text-container" style="height: ${containerHeight}px;">
                <div class="moving-text">${duplicatedText}</div>
            </div>
        `,
        iconSize: [30, containerHeight], // Adjust icon size as needed
        iconAnchor: [15, containerHeight / 2], // Adjust anchor as needed
        popupAnchor: [0, -containerHeight / 2]
    });
}

export function createAnimationClass(speed = 10) {
    const animationName = `move-up-${Date.now()}`;
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        @keyframes ${animationName} {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        .${animationName} .moving-text {
            animation: ${animationName} ${speed}s linear infinite;
            color: #00ff41;
        }
        .${animationName} .moving-text span {
            display: block;
        }
    `;
    document.head.appendChild(style);
    return animationName;
}
