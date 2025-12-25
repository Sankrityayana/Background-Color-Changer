// Color history array
let colorHistory = [];
const maxHistory = 10;

// Light color palette (avoiding purple)
const lightColors = [
    { hex: '#ffcccb', name: 'Light Red' },
    { hex: '#ffebcd', name: 'Blanched Almond' },
    { hex: '#fff4e6', name: 'Light Orange' },
    { hex: '#fffacd', name: 'Lemon Chiffon' },
    { hex: '#e6f7ff', name: 'Light Blue' },
    { hex: '#d1f2eb', name: 'Light Teal' },
    { hex: '#d4edda', name: 'Light Green' },
    { hex: '#f8d7da', name: 'Light Pink' },
    { hex: '#fff3cd', name: 'Light Yellow' },
    { hex: '#cfe2ff', name: 'Light Sky Blue' },
    { hex: '#e7f5ff', name: 'Alice Blue' },
    { hex: '#fef5e7', name: 'Light Cream' },
    { hex: '#fce4ec', name: 'Light Rose' },
    { hex: '#e8f5e9', name: 'Mint Cream' },
    { hex: '#fff9c4', name: 'Light Lemon' },
    { hex: '#e0f7fa', name: 'Cyan Light' },
    { hex: '#ffe0b2', name: 'Peach Puff' },
    { hex: '#ffccbc', name: 'Light Coral' },
    { hex: '#d7ccc8', name: 'Light Brown' },
    { hex: '#f5f5f5', name: 'White Smoke' }
];

// Get elements
const colorCodeDisplay = document.getElementById('colorCode');
const colorNameDisplay = document.getElementById('colorName');
const customColorInput = document.getElementById('customColor');
const historyGrid = document.getElementById('historyGrid');
const toast = document.getElementById('toast');

// Function to change background color
function changeBackgroundColor(color, name = 'Custom Color') {
    document.body.style.backgroundColor = color;
    colorCodeDisplay.textContent = color.toUpperCase();
    colorNameDisplay.textContent = name;
    
    // Add to history
    addToHistory(color);
}

// Function to generate random light color
function changeToRandomColor() {
    const randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
    changeBackgroundColor(randomColor.hex, randomColor.name);
}

// Function to change to a random light color
function changeToLightColor() {
    // Generate a random light color (avoiding purple range)
    let r, g, b;
    do {
        r = Math.floor(Math.random() * 100) + 156; // 156-255 for light colors
        g = Math.floor(Math.random() * 100) + 156;
        b = Math.floor(Math.random() * 100) + 156;
    } while (Math.abs(r - b) < 30 && r > 180 && b > 180 && g < 200); // Avoid purple-ish colors
    
    const hexColor = rgbToHex(r, g, b);
    changeBackgroundColor(hexColor, 'Generated Light Color');
}

// Function to convert RGB to Hex
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Function to validate hex color
function isValidHex(hex) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

// Function to apply custom color
function applyCustomColor() {
    let color = customColorInput.value.trim();
    
    // Add # if not present
    if (color && !color.startsWith('#')) {
        color = '#' + color;
    }
    
    if (isValidHex(color)) {
        changeBackgroundColor(color, 'Custom Color');
        customColorInput.value = '';
        showToast('Color applied successfully!');
    } else {
        showToast('Invalid color code! Use format: #ff6b6b');
    }
}

// Function to copy color code
function copyColorCode() {
    const colorCode = colorCodeDisplay.textContent;
    
    navigator.clipboard.writeText(colorCode).then(() => {
        showToast('Color code copied: ' + colorCode);
    }).catch(err => {
        // Fallback method
        const textArea = document.createElement('textarea');
        textArea.value = colorCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Color code copied: ' + colorCode);
    });
}

// Function to add color to history
function addToHistory(color) {
    // Check if color already exists in history
    const existingIndex = colorHistory.indexOf(color);
    if (existingIndex !== -1) {
        colorHistory.splice(existingIndex, 1);
    }
    
    // Add to beginning of array
    colorHistory.unshift(color);
    
    // Keep only last maxHistory colors
    if (colorHistory.length > maxHistory) {
        colorHistory = colorHistory.slice(0, maxHistory);
    }
    
    updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
    historyGrid.innerHTML = '';
    
    colorHistory.forEach(color => {
        const colorBtn = document.createElement('button');
        colorBtn.className = 'history-color';
        colorBtn.style.backgroundColor = color;
        colorBtn.title = color;
        colorBtn.onclick = () => changeBackgroundColor(color, 'History Color');
        historyGrid.appendChild(colorBtn);
    });
}

// Function to show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Event listener for Enter key on custom input
customColorInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        applyCustomColor();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        changeToRandomColor();
    } else if (event.key === 'l' || event.key === 'L') {
        changeToLightColor();
    } else if (event.key === 'c' || event.key === 'C') {
        if (!event.ctrlKey) {
            copyColorCode();
        }
    } else if (event.key === ' ') {
        event.preventDefault();
        changeToRandomColor();
    }
});

// Initialize with a default color
window.addEventListener('load', () => {
    changeBackgroundColor('#f0f4f8', 'Light Blue Gray');
});
