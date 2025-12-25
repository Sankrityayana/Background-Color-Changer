# Background Color Changer

A fun and interactive background color changer web application built with vanilla HTML, CSS, and JavaScript. Transform your screen with beautiful light colors and create stunning visual experiences!

## Features

- 🎨 **Multiple Color Modes**: Random, Light, Dark, and Vivid color generation
- ☀️ **Light Colors**: Soft, pastel colors for a gentle look
- 🌙 **Dark Colors**: Deep, rich colors for dramatic backgrounds
- ✨ **Vivid Colors**: Bright, saturated colors for bold statements
- 🎯 **16 Preset Colors**: Quick access to light, dark, and vivid colors
- ✍️ **Custom Color Input**: Enter your own hex color codes
- 📋 **Copy to Clipboard**: One-click copy of current color code
- 🕒 **Color History**: Track your last 10 used colors
- 🎨 **Smart Text Contrast**: Auto-adjusts text color for readability
- ⌨️ **Keyboard Shortcuts**: Fast navigation with hotkeys
- 📱 **Fully Responsive**: Works perfectly on all screen sizes
- 🎭 **Smooth Transitions**: Beautiful color change animations
- 🎨 **15,000 Total Colors**: 5000 per type (Light, Dark, Vivid)

## Demo

The background color changer provides multiple ways to change your screen color:
- Random color generation (from 15,000 colors across all palettes)
- Light color mode (5000 soft, pastel colors)
- Dark color mode (5000 deep, rich colors)
- Vivid color mode (5000 bright, bold colors)
- 16 preset color buttons
- Custom hex color input
- Color history quick access with last 10 colors

## Usage

### Getting Started
1. Open `index.html` in your web browser
2. The page loads with a default light blue-gray color
3. Use any of the methods below to change the background

### Button Controls
- **🎲 Random Color**: Generate a random color from all available palettes (15,000 colors)
- **☀️ Light Color**: Generate a random light, pastel color (5000 options)
- **🌙 Dark Color**: Generate a random dark, deep color (5000 options)
- **✨ Vivid Color**: Generate a random bright, vibrant color (5000 options)
- **📋 Copy Code**: Copy the current color hex code to clipboard

### Preset Colors
Click any of the 16 preset color buttons to instantly change the background:

**Light Colors:**
- Light Red, Blanched Almond, Light Orange, Lemon Chiffon
- Light Blue, Light Teal, Light Green, Light Pink

**Dark Colors:**
- Dark Blue, Dark Gray, Dark Navy, Deep Blue

**Vivid Colors:**
- Coral Red, Turquoise, Sky Blue, Golden Yellow

### Custom Color Input
1. Enter a hex color code in the input field (e.g., `#ff6b6b` or `ff6b6b`)
2. Click "Apply" or press Enter
3. The background will change to your custom color

### Color History
- Automatically tracks your last 10 colors
- Click any history color to reapply it
- Most recent colors appear first

### Keyboard Shortcuts
- **R**: Generate random color (from all palettes)
- **L**: Generate light color
- **D**: Generate dark color
- **V**: Generate vivid color
- **C**: Copy color code
- **Space**: Generate random color

## File Structure

```
background-color-changer/
│
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Color changing logic
└── README.md       # Project documentation
```

## Color Palette

The application features a multi-color theme with solid colors (no purple, no gradients):

**UI Colors:**
- **Background**: Light gray (#f5f7fa)
- **Card**: White with transparency
- **Text**: Auto-adjusts based on background (dark or light)
- **Random Button**: Blue (#3498db)
- **Light Button**: Orange (#f39c12)
- **Dark Button**: Dark blue-gray (#2c3e50)
- **Vivid Button**: Red (#e74c3c)
- **Copy Button**: Green (#27ae60)
- **Accent**: Teal (#16a085)

**Generated Colors (Programmatically):**
- **5000 Light Colors**: Pastels and soft tones (RGB: 180-255)
- **5000 Dark Colors**: Deep blues, grays, charcoals, and rich tones (RGB: 0-79)
- **5000 Vivid Colors**: Bright, saturated colors across full spectrum (RGB: 0-255)
- **Total: 15,000 unique colors**

## Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with transitions and animations
- **JavaScript (ES6)**: Color generation and DOM manipulation

## Features in Detail

### Color Generation Modes
- **Random**: Picks from all 15,000 colors across all palettes
- **Light**: 5000 soft, pastel colors for gentle backgrounds (RGB range 180-255)
- **Dark**: 5000 deep colors perfect for dramatic effect (RGB range 0-79)
- **Vivid**: 5000 bright colors for bold, eye-catching backgrounds (full RGB spectrum)
- **Programmatic Generation**: Colors generated using prime number modulo operations for optimal distribution

### Smart Features
- **Auto Text Contrast**: Text color automatically adjusts (white on dark, dark on light)
- **Brightness Detection**: Calculates perceived brightness for optimal readability
- **Color History**: Remembers your last 10 colors for quick reuse
- **Duplicate Prevention**: History automatically removes duplicate colors

### Color Validation
- Validates hex color codes automatically
- Accepts formats: `#ff6b6b` or `ff6b6b`
- Provides user feedback for invalid codes

### User Experience
- Smooth color transitions (0.5s ease)
- Toast notifications for user feedback
- Hover effects on all interactive elements
- Clean, modern interface with glassmorphism effect

## Browser Compatibility

Works seamlessly on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Responsive Design

Optimized for all screen sizes:
- **Desktop**: Full-featured layout with spacious design
- **Tablet**: Medium-sized optimized view
- **Mobile**: Touch-friendly interface (320px and up)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/Sankrityayana/Background-Color-Changer.git
```

2. Navigate to the project directory:
```bash
cd Background-Color-Changer
```

3. Open `index.html` in your preferred web browser

No dependencies or build process required!

## Customization

### Modifying Color Generation
Colors are generated programmatically in `script.js`:

```javascript
// Modify generation functions to adjust color ranges
function generateLightColors() {
    // Adjust RGB ranges or generation count
    const r = Math.floor(180 + (i * 7919) % 76); // 180-255
    // ...
}
```

### Changing UI Colors
Modify the button colors in `styles.css`:

```css
.btn-primary {
    background-color: #yourcolor;
}
```

### Adjusting History Size
Change the `maxHistory` variable in `script.js`:

```javascript
const maxHistory = 10; // Change to your preferred number
```

### Customizing Brightness Threshold
Adjust the brightness detection in `script.js`:

```javascript
// In isColorDark function
return brightness < 128; // Change threshold (0-255)
```

## Future Enhancements

Possible features for future versions:
- ✅ Dark color generation (Added!)
- ✅ Vivid color generation (Added!)
- ✅ Auto text contrast adjustment (Added!)
- Save favorite colors permanently (localStorage)
- Export color palette as JSON/CSV
- Color gradient generator
- Color scheme generator (complementary, analogous, triadic)
- Share colors via URL parameters
- RGB and HSL input support
- Color blindness simulation
- Named color search

## Use Cases

Perfect for:
- 🎨 Designers exploring color options
- 👨‍💻 Developers testing background colors
- 📸 Content creators finding the right backdrop
- 🧘 Relaxation and mood enhancement
- 🎓 Learning about colors and hex codes
- 🎮 Fun color experimentation

## Contributing

Feel free to fork this project and submit pull requests with improvements, new features, or bug fixes!

## License

This project is open source and available for personal and commercial use.

## Author

Created by Sankrityayana

## Acknowledgments

- 15,000 colors generated programmatically using mathematical algorithms
- Full color spectrum including purple tones
- Prime number distribution for optimal color variety
- Inspired by modern color picker tools
- Built with accessibility and user experience in mind

---

**Transform your screen with beautiful colors! 🎨**
