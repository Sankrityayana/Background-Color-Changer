// Color history array
let colorHistory = [];
const maxHistory = 10;

// Generate 5000 light colors programmatically
function generateLightColors() {
    const colors = [];
    for (let i = 0; i < 5000; i++) {
        const r = Math.floor(180 + (i * 7919) % 76); // 180-255
        const g = Math.floor(180 + (i * 8831) % 76);
        const b = Math.floor(180 + (i * 9973) % 76);
        const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
        colors.push({ hex: hex, name: `Light Color ${i + 1}` });
    }
    return colors;
}

const lightColors = generateLightColors();

// Generate 5000 dark colors programmatically
function generateDarkColors() {
    const colors = [];
    for (let i = 0; i < 5000; i++) {
        const r = Math.floor(0 + (i * 7211) % 80); // 0-79
        const g = Math.floor(0 + (i * 8191) % 80);
        const b = Math.floor(0 + (i * 9319) % 80);
        const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
        colors.push({ hex: hex, name: `Dark Color ${i + 1}` });
    }
    return colors;
}

const darkColors = generateDarkColors();

// Generate 5000 vivid colors programmatically
function generateVividColors() {
    const colors = [];
    for (let i = 0; i < 5000; i++) {
        const r = Math.floor(0 + (i * 7523) % 256); // 0-255 full spectrum
        const g = Math.floor(0 + (i * 8537) % 256);
        const b = Math.floor(0 + (i * 9851) % 256);
        const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
        colors.push({ hex: hex, name: `Vivid Color ${i + 1}` });
    }
    return colors;
}

const vividColors = generateVividColors();

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
