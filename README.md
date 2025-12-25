# Background Color Changer

A fun and interactive background color changer web application built with vanilla HTML, CSS, and JavaScript. Transform your screen with beautiful light colors and create stunning visual experiences!

## Features

- 🎨 **Random Color Generator**: Generate random beautiful light colors
- ☀️ **Light Color Mode**: Specifically generate light, pleasant colors
- 🎯 **12 Preset Colors**: Quick access to carefully selected light colors
- ✍️ **Custom Color Input**: Enter your own hex color codes
- 📋 **Copy to Clipboard**: One-click copy of current color code
- 🕒 **Color History**: Track your last 10 used colors
- ⌨️ **Keyboard Shortcuts**: Fast navigation with hotkeys
- 📱 **Fully Responsive**: Works perfectly on all screen sizes
- 🎭 **Smooth Transitions**: Beautiful color change animations
- 🚫 **No Purple Colors**: Carefully curated palette excluding purple tones

## Demo

The background color changer provides multiple ways to change your screen color:
- Random color generation
- Preset color selection
- Custom hex color input
- Color history quick access

## Usage

### Getting Started
1. Open `index.html` in your web browser
2. The page loads with a default light blue-gray color
3. Use any of the methods below to change the background

### Button Controls
- **🎲 Random Color**: Generate a random color from the preset palette
- **☀️ Light Color**: Generate a random light color (avoiding purple tones)
- **📋 Copy Code**: Copy the current color hex code to clipboard

### Preset Colors
Click any of the 12 preset color buttons to instantly change the background:
- Light Red
- Blanched Almond
- Light Orange
- Lemon Chiffon
- Light Blue
- Light Teal
- Light Green
- Light Pink
- Light Yellow
- Light Sky Blue
- Alice Blue
- Light Cream

### Custom Color Input
1. Enter a hex color code in the input field (e.g., `#ff6b6b` or `ff6b6b`)
2. Click "Apply" or press Enter
3. The background will change to your custom color

### Color History
- Automatically tracks your last 10 colors
- Click any history color to reapply it
- Most recent colors appear first

### Keyboard Shortcuts
- **R**: Generate random color
- **L**: Generate light color
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

The application features a light, multi-color theme (no purple):
- **Card Background**: White with transparency
- **Text**: Dark blue-gray (#2c3e50)
- **Primary Button**: Blue (#3498db)
- **Secondary Button**: Orange (#f39c12)
- **Success Button**: Green (#27ae60)
- **Accent**: Teal (#16a085)
- **20+ Light Preset Colors**: Carefully selected light colors

## Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with transitions and animations
- **JavaScript (ES6)**: Color generation and DOM manipulation

## Features in Detail

### Random Color Generation
- Generates colors from a curated palette of 20+ light colors
- Each color has a descriptive name
- Smooth transition between colors

### Light Color Algorithm
- Generates random RGB values in the light range (156-255)
- Algorithmically avoids purple color ranges
- Ensures pleasant, eye-friendly colors

### Color Validation
- Validates hex color codes automatically
- Accepts formats: `#ff6b6b` or `ff6b6b`
- Provides user feedback for invalid codes

### Color History
- Stores last 10 colors
- Removes duplicates automatically
- Persists during the session
- One-click reapplication

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

### Adding More Preset Colors
Edit the `lightColors` array in `script.js`:

```javascript
{ hex: '#yourcolor', name: 'Your Color Name' }
```

### Changing Color Palette
Modify the color values in `styles.css` to match your preferred theme.

### Adjusting History Size
Change the `maxHistory` variable in `script.js`:

```javascript
const maxHistory = 10; // Change to your preferred number
```

## Future Enhancements

Possible features for future versions:
- Save favorite colors permanently (localStorage)
- Export color palette
- Color gradient generator
- Color scheme generator (complementary, analogous, etc.)
- Dark mode toggle
- Share colors via URL
- RGB and HSL input support

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

- Color palette carefully curated for visual comfort
- No purple colors as per design specification
- Inspired by modern color picker tools
- Built with accessibility and user experience in mind

---

**Transform your screen with beautiful colors! 🎨**
