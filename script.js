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

// Dark color palette (avoiding purple)
const darkColors = [
    { hex: '#2c3e50', name: 'Dark Blue' },
    { hex: '#34495e', name: 'Dark Gray' },
    { hex: '#1a1a2e', name: 'Dark Navy' },
    { hex: '#0f3460', name: 'Deep Blue' },
    { hex: '#16213e', name: 'Midnight Blue' },
    { hex: '#1f4068', name: 'Navy Blue' },
    { hex: '#1b262c', name: 'Dark Slate' },
    { hex: '#0f4c75', name: 'Ocean Blue' },
    { hex: '#1e3a5f', name: 'Royal Navy' },
    { hex: '#222831', name: 'Charcoal' },
    { hex: '#2d4059', name: 'Dark Denim' },
    { hex: '#1c1c1c', name: 'Almost Black' },
    { hex: '#3d3d3d', name: 'Dark Charcoal' },
    { hex: '#0e4c92', name: 'Deep Ocean' },
    { hex: '#1a3a52', name: 'Prussian Blue' }
];

// Vivid color palette (avoiding purple)
const vividColors = [
    { hex: '#ff6b6b', name: 'Coral Red' },
    { hex: '#4ecdc4', name: 'Turquoise' },
    { hex: '#45b7d1', name: 'Sky Blue' },
    { hex: '#f7b731', name: 'Golden Yellow' },
    { hex: '#5f27cd', name: 'Royal Blue' },
    { hex: '#00d2d3', name: 'Cyan' },
    { hex: '#ff9ff3', name: 'Pink' },
    { hex: '#54a0ff', name: 'Bright Blue' },
    { hex: '#48dbfb', name: 'Electric Blue' },
    { hex: '#1dd1a1', name: 'Mint Green' },
    { hex: '#10ac84', name: 'Green Sea' },
    { hex: '#ee5a6f', name: 'Watermelon' },
    { hex: '#f368e0', name: 'Bright Pink' },
    { hex: '#ff9f43', name: 'Orange' },
    { hex: '#0abde3', name: 'Cool Blue' }
];

// All colors combined
const allColors = [...lightColors, ...darkColors, ...vividColors];

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
    
    // Update text color based on background brightness
    updateTextColor(color);
    
    // Add to history
    addToHistory(color);
}

// Function to determine if color is dark
function isColorDark(hex) {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
}

// Function to update text color based on background
function updateTextColor(bgColor) {
    const card = document.querySelector('.card');
    if (isColorDark(bgColor)) {
        card.style.color = '#ffffff';
        colorCodeDisplay.style.color = '#34495e';
        colorNameDisplay.style.color = '#4ecdc4';
    } else {
        card.style.color = '#2c3e50';
        colorCodeDisplay.style.color = '#2c3e50';
        colorNameDisplay.style.color = '#16a085';
    }
}

// Function to generate random color from all palettes
function changeToRandomColor() {
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    changeBackgroundColor(randomColor.hex, randomColor.name);
}

// Function to change to a random light color
function changeToLightColor() {
    const randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
    changeBackgroundColor(randomColor.hex, randomColor.name);
}

// Function to change to a random dark color
function changeToDarkColor() {
    const randomColor = darkColors[Math.floor(Math.random() * darkColors.length)];
    changeBackgroundColor(randomColor.hex, randomColor.name);
}

// Function to change to a random vivid color
function changeToVividColor() {
    const randomColor = vividColors[Math.floor(Math.random() * vividColors.length)];
    changeBackgroundColor(randomColor.hex, randomColor.name);
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
    } else if (event.key === 'd' || event.key === 'D') {
        changeToDarkColor();
    } else if (event.key === 'v' || event.key === 'V') {
        changeToVividColor();
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
