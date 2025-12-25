// Color history array
let colorHistory = [];
const maxHistory = 10;

// Light color palette (200+ colors including purple)
const lightColors = [
    { hex: '#ffcccb', name: 'Light Red' }, { hex: '#ffebcd', name: 'Blanched Almond' }, { hex: '#fff4e6', name: 'Light Orange' }, { hex: '#fffacd', name: 'Lemon Chiffon' },
    { hex: '#e6f7ff', name: 'Light Blue' }, { hex: '#d1f2eb', name: 'Light Teal' }, { hex: '#d4edda', name: 'Light Green' }, { hex: '#f8d7da', name: 'Light Pink' },
    { hex: '#fff3cd', name: 'Light Yellow' }, { hex: '#cfe2ff', name: 'Light Sky Blue' }, { hex: '#e7f5ff', name: 'Alice Blue' }, { hex: '#fef5e7', name: 'Light Cream' },
    { hex: '#fce4ec', name: 'Light Rose' }, { hex: '#e8f5e9', name: 'Mint Cream' }, { hex: '#fff9c4', name: 'Light Lemon' }, { hex: '#e0f7fa', name: 'Cyan Light' },
    { hex: '#ffe0b2', name: 'Peach Puff' }, { hex: '#ffccbc', name: 'Light Coral' }, { hex: '#d7ccc8', name: 'Light Brown' }, { hex: '#f5f5f5', name: 'White Smoke' },
    { hex: '#fff0f5', name: 'Lavender Blush' }, { hex: '#faf0e6', name: 'Linen' }, { hex: '#fdf5e6', name: 'Old Lace' }, { hex: '#fffaf0', name: 'Floral White' },
    { hex: '#f0fff0', name: 'Honeydew' }, { hex: '#f0ffff', name: 'Azure' }, { hex: '#f0f8ff', name: 'Alice Blue' }, { hex: '#faebd7', name: 'Antique White' },
    { hex: '#ffe4e1', name: 'Misty Rose' }, { hex: '#ffe4b5', name: 'Moccasin' }, { hex: '#ffdab9', name: 'Peach' }, { hex: '#eee8aa', name: 'Pale Goldenrod' },
    { hex: '#f5deb3', name: 'Wheat' }, { hex: '#fff5ee', name: 'Seashell' }, { hex: '#f5f5dc', name: 'Beige' }, { hex: '#fffacd', name: 'Lemon' },
    { hex: '#ffe4c4', name: 'Bisque' }, { hex: '#ffffe0', name: 'Light Yellow' }, { hex: '#fffff0', name: 'Ivory' }, { hex: '#ffefd5', name: 'Papaya Whip' },
    { hex: '#faf0e6', name: 'Linen' }, { hex: '#fff8dc', name: 'Cornsilk' }, { hex: '#ffebcd', name: 'Blanched Almond' }, { hex: '#ffe4cd', name: 'Champagne' },
    { hex: '#ffd9b3', name: 'Apricot' }, { hex: '#ffcc99', name: 'Light Apricot' }, { hex: '#ffcccc', name: 'Pastel Pink' }, { hex: '#ffb3ba', name: 'Light Salmon' },
    { hex: '#ffdfba', name: 'Light Peach' }, { hex: '#ffffba', name: 'Pastel Yellow' }, { hex: '#baffc9', name: 'Pastel Green' }, { hex: '#bae1ff', name: 'Pastel Blue' },
    { hex: '#e6e6fa', name: 'Lavender' }, { hex: '#f0e68c', name: 'Khaki' }, { hex: '#e0ffff', name: 'Light Cyan' }, { hex: '#f5fffa', name: 'Mint Cream' },
    { hex: '#f8f8ff', name: 'Ghost White' }, { hex: '#fffafa', name: 'Snow' }, { hex: '#fafafa', name: 'Platinum' }, { hex: '#f7f7f7', name: 'Cultured' },
    { hex: '#fcfcfc', name: 'White Lilac' }, { hex: '#fefefe', name: 'Bright White' }, { hex: '#ffd7d7', name: 'Pale Pink' }, { hex: '#ffe7e7', name: 'Blush' },
    { hex: '#ffb6c1', name: 'Light Pink' }, { hex: '#ffc0cb', name: 'Pink' }, { hex: '#ffb3d9', name: 'Cotton Candy' }, { hex: '#ffddf4', name: 'Pale Magenta' },
    { hex: '#ffe6f0', name: 'Magnolia' }, { hex: '#fff0f7', name: 'Pale Rose' }, { hex: '#ffe5ec', name: 'Light Rose' }, { hex: '#ffd4e5', name: 'Rose Quartz' },
    { hex: '#ffc8dd', name: 'Fairy Tale' }, { hex: '#ffafcc', name: 'Pastel Magenta' }, { hex: '#ffccd5', name: 'Bubble Gum' }, { hex: '#ffe5e5', name: 'Pale Red' },
    { hex: '#fff5f5', name: 'Vanilla Ice' }, { hex: '#ffe4e6', name: 'Misty Pink' }, { hex: '#ffd6dd', name: 'Sweet Pink' }, { hex: '#ffb3c6', name: 'Cherry Blossom' },
    { hex: '#ffa6c9', name: 'Carnation Pink' }, { hex: '#ff99c2', name: 'Light Fuchsia' }, { hex: '#ffebf0', name: 'Pearl Pink' }, { hex: '#ffdce5', name: 'Pale Coral' },
    { hex: '#ffcdd2', name: 'Pastel Red' }, { hex: '#ffb3ba', name: 'Melon' }, { hex: '#ffd5c2', name: 'Peach Cream' }, { hex: '#ffd4a3', name: 'Sunset' },
    { hex: '#ffe5b4', name: 'Peach' }, { hex: '#ffeaa7', name: 'Light Gold' }, { hex: '#fff1c1', name: 'Pale Yellow' }, { hex: '#fff5ba', name: 'Cream' },
    { hex: '#fffacd', name: 'Banana' }, { hex: '#fff8b8', name: 'Pale Banana' }, { hex: '#fffadd', name: 'Champagne' }, { hex: '#fef9e3', name: 'Eggshell' },
    { hex: '#fef4e8', name: 'Light Beige' }, { hex: '#fef0db', name: 'Bisque' }, { hex: '#feead1', name: 'Tan' }, { hex: '#fee5c7', name: 'Light Tan' },
    { hex: '#fedebe', name: 'Desert Sand' }, { hex: '#fed8b1', name: 'Pale Peach' }, { hex: '#ffd2a6', name: 'Light Salmon' }, { hex: '#ffcc99', name: 'Peach Orange' },
    { hex: '#ffc685', name: 'Light Orange' }, { hex: '#ffbe76', name: 'Mellow Apricot' }, { hex: '#ffb86c', name: 'Apricot' }, { hex: '#ffb347', name: 'Pastel Orange' },
    { hex: '#ffa64d', name: 'Light Tangerine' }, { hex: '#ff9966', name: 'Atomic Tangerine' }, { hex: '#ff8c69', name: 'Salmon' }, { hex: '#ff9980', name: 'Light Coral' },
    { hex: '#ffaa99', name: 'Pale Orange' }, { hex: '#ffb8a3', name: 'Light Melon' }, { hex: '#ffc6ac', name: 'Pale Coral' }, { hex: '#ffd4b5', name: 'Vanilla' },
    { hex: '#ffe2be', name: 'Pale Gold' }, { hex: '#fff0c7', name: 'Light Cream' }, { hex: '#fffed0', name: 'Lemon Cream' }, { hex: '#fffad9', name: 'Light Lemon' },
    { hex: '#fff7e2', name: 'Cream Yellow' }, { hex: '#fff3eb', name: 'Alabaster' }, { hex: '#fff0f4', name: 'Light Lavender' }, { hex: '#ffecfd', name: 'Pale Pink' },
    { hex: '#d5f4e6', name: 'Aero Blue' }, { hex: '#d0f0c0', name: 'Tea Green' }, { hex: '#c9e4ca', name: 'Celadon' }, { hex: '#e4f9f5', name: 'Mint' },
    { hex: '#d6fcff', name: 'Light Aqua' }, { hex: '#c7ffd8', name: 'Pastel Cyan' }, { hex: '#c3f0ca', name: 'Light Mint' }, { hex: '#c8ffbe', name: 'Pale Lime' },
    { hex: '#d4edda', name: 'Mint Green' }, { hex: '#def2f1', name: 'Light Turquoise' }, { hex: '#e8f8f5', name: 'Pale Turquoise' }, { hex: '#d5f4e6', name: 'Light Jade' },
    { hex: '#dcfff6', name: 'Aqua' }, { hex: '#d1f2eb', name: 'Tiffany Blue' }, { hex: '#d9f7f7', name: 'Pale Cyan' }, { hex: '#e0f7fa', name: 'Ice Blue' },
    { hex: '#e1f5fe', name: 'Baby Blue' }, { hex: '#e3f2fd', name: 'Pale Blue' }, { hex: '#e8eaf6', name: 'Lavender Blue' }, { hex: '#ede7f6', name: 'Pale Lavender' },
    { hex: '#b3e5fc', name: 'Light Blue' }, { hex: '#b2ebf2', name: 'Light Cyan' }, { hex: '#b2dfdb', name: 'Light Teal' }, { hex: '#c8e6c9', name: 'Light Green' },
    { hex: '#dcedc8', name: 'Pale Green' }, { hex: '#f0f4c3', name: 'Light Lime' }, { hex: '#fff9c4', name: 'Lemon Yellow' }, { hex: '#ffecb3', name: 'Light Amber' },
    { hex: '#ffe0b2', name: 'Light Peach' }, { hex: '#ffccbc', name: 'Light Coral' }, { hex: '#ffb3b3', name: 'Pastel Rose' }, { hex: '#ffd9e6', name: 'Light Blush' },
    { hex: '#ffe0f0', name: 'Pale Pink' }, { hex: '#f3e5f5', name: 'Lavender Mist' }, { hex: '#e1bee7', name: 'Pale Plum' }, { hex: '#eccfff', name: 'Mauve' },
    { hex: '#f8bbd0', name: 'Light Pink' }, { hex: '#ffb3de', name: 'Pink Lace' }, { hex: '#ffc0e0', name: 'Orchid Pink' }, { hex: '#ffcce5', name: 'Candy Pink' },
    { hex: '#ffd9eb', name: 'Classic Rose' }, { hex: '#ffe6f1', name: 'Pale Rose' }, { hex: '#fff3f7', name: 'Rose White' }, { hex: '#ffebf3', name: 'Ballet Slipper' },
    { hex: '#ffddee', name: 'Blossom' }, { hex: '#ffccdd', name: 'Soft Pink' }, { hex: '#ffbbcc', name: 'Powder Pink' }, { hex: '#ffaabb', name: 'Bubblegum' },
    { hex: '#d4f1f4', name: 'Powder Blue' }, { hex: '#d5e5ff', name: 'Periwinkle' }, { hex: '#c9d6ff', name: 'Baby Blue' }, { hex: '#d4d9ff', name: 'Pale Violet' },
    { hex: '#e5d9f2', name: 'Thistle' }, { hex: '#f4e4f7', name: 'Light Orchid' }, { hex: '#fde8ff', name: 'Pink Lemonade' }, { hex: '#ffe6ff', name: 'Lavender Rose' },
    { hex: '#fff0ff', name: 'Magnolia White' }, { hex: '#ffe6f7', name: 'Pale Fuchsia' }, { hex: '#ffd6f0', name: 'Light Magenta' }, { hex: '#ffc6e9', name: 'Orchid' },
    { hex: '#ffb3e3', name: 'Pink' }, { hex: '#ffa3dd', name: 'Hot Pink' }, { hex: '#ff99d1', name: 'Flamingo' }, { hex: '#ff8fc7', name: 'Carnation' },
    { hex: '#d6e4ff', name: 'Periwinkle Blue' }, { hex: '#c6daff', name: 'Sky Blue' }, { hex: '#b6d0ff', name: 'Baby Blue' }, { hex: '#cce7ff', name: 'Columbia Blue' },
    { hex: '#dcf0ff', name: 'Alice Blue' }, { hex: '#e6f5ff', name: 'Light Sky' }, { hex: '#f0f9ff', name: 'Azure Mist' }, { hex: '#d9f0f7', name: 'Powder Blue' },
    { hex: '#c9e9f6', name: 'Light Blue' }, { hex: '#b9e3f5', name: 'Sky Blue' }, { hex: '#a9ddf4', name: 'Baby Blue' }, { hex: '#99d7f3', name: 'Cornflower' },
    { hex: '#e6e6fa', name: 'Lavender' }, { hex: '#dda0dd', name: 'Plum' }, { hex: '#ee82ee', name: 'Violet' }, { hex: '#da70d6', name: 'Orchid' },
    { hex: '#e0b0ff', name: 'Mauve' }, { hex: '#d8bfd8', name: 'Thistle' }, { hex: '#dda0dd', name: 'Light Plum' }, { hex: '#e6d5e6', name: 'Pale Lavender' },
    { hex: '#f3e5f5', name: 'Lavender Mist' }, { hex: '#e1d5e7', name: 'Pale Purple' }, { hex: '#d5c3e5', name: 'Light Violet' }, { hex: '#c9b1e3', name: 'Pale Lilac' },
    { hex: '#bd9fe1', name: 'Wisteria' }, { hex: '#b18fdf', name: 'Light Purple' }, { hex: '#e8d5f2', name: 'Pale Mauve' }, { hex: '#f0e6fa', name: 'Lavender Blush' },
    { hex: '#e4d5eb', name: 'Lilac' }, { hex: '#d9c4e6', name: 'Light Amethyst' }, { hex: '#ceb3e1', name: 'Pale Violet' }, { hex: '#c3a2dc', name: 'Light Orchid' },
    { hex: '#b891d7', name: 'Medium Purple' }, { hex: '#e6d9f5', name: 'Pale Lavender' }, { hex: '#dcc8f0', name: 'Light Purple' }, { hex: '#d2b7eb', name: 'Pale Mauve' },
    { hex: '#c8a6e6', name: 'Wisteria' }, { hex: '#be95e1', name: 'Light Violet' }, { hex: '#e9ddf5', name: 'Pale Purple' }, { hex: '#dfccf0', name: 'Lilac' }
];

// Dark color palette (200+ colors including purple)
const darkColors = [
    { hex: '#2c3e50', name: 'Dark Blue' }, { hex: '#34495e', name: 'Dark Gray' }, { hex: '#1a1a2e', name: 'Dark Navy' }, { hex: '#0f3460', name: 'Deep Blue' },
    { hex: '#16213e', name: 'Midnight Blue' }, { hex: '#1f4068', name: 'Navy Blue' }, { hex: '#1b262c', name: 'Dark Slate' }, { hex: '#0f4c75', name: 'Ocean Blue' },
    { hex: '#1e3a5f', name: 'Royal Navy' }, { hex: '#222831', name: 'Charcoal' }, { hex: '#2d4059', name: 'Dark Denim' }, { hex: '#1c1c1c', name: 'Almost Black' },
    { hex: '#3d3d3d', name: 'Dark Charcoal' }, { hex: '#0e4c92', name: 'Deep Ocean' }, { hex: '#1a3a52', name: 'Prussian Blue' }, { hex: '#0b132b', name: 'Oxford Blue' },
    { hex: '#13293d', name: 'Dark Cerulean' }, { hex: '#191970', name: 'Midnight Blue' }, { hex: '#1c2841', name: 'Space Cadet' }, { hex: '#003366', name: 'Prussian Blue' },
    { hex: '#002147', name: 'Oxford Blue' }, { hex: '#001f3f', name: 'Navy' }, { hex: '#002b5c', name: 'Dark Cobalt' }, { hex: '#003153', name: 'Prussian Blue' },
    { hex: '#002d62', name: 'Dark Blue' }, { hex: '#003f5c', name: 'Dark Cerulean' }, { hex: '#004d7a', name: 'Indigo Dye' }, { hex: '#005b96', name: 'Lapis Lazuli' },
    { hex: '#006ba6', name: 'Cerulean Blue' }, { hex: '#014f86', name: 'Dark Blue' }, { hex: '#01497c', name: 'Blue Sapphire' }, { hex: '#013a63', name: 'Prussian Blue' },
    { hex: '#012a4a', name: 'Oxford Blue' }, { hex: '#011f4b', name: 'Dark Navy' }, { hex: '#03254c', name: 'Prussian Blue' }, { hex: '#05386b', name: 'Dark Blue' },
    { hex: '#071e3d', name: 'Dark Slate' }, { hex: '#0a1931', name: 'Rich Black' }, { hex: '#0d1b2a', name: 'Oxford Blue' }, { hex: '#1b1b2f', name: 'Dark Gray' },
    { hex: '#162447', name: 'Dark Blue' }, { hex: '#1f2833', name: 'Gunmetal' }, { hex: '#0c2d48', name: 'Dark Blue' }, { hex: '#051923', name: 'Rich Black' },
    { hex: '#000814', name: 'Black' }, { hex: '#001d3d', name: 'Prussian Blue' }, { hex: '#003566', name: 'Dark Blue' }, { hex: '#002855', name: 'Oxford Blue' },
    { hex: '#003049', name: 'Prussian Blue' }, { hex: '#023047', name: 'Midnight Green' }, { hex: '#1d3557', name: 'Prussian Blue' }, { hex: '#264653', name: 'Charcoal' },
    { hex: '#2a4a5a', name: 'Dark Slate' }, { hex: '#1e3d58', name: 'Midnight Blue' }, { hex: '#283d3b', name: 'Dark Slate' }, { hex: '#232b2b', name: 'Charleston Green' },
    { hex: '#1a1a1d', name: 'Eerie Black' }, { hex: '#252525', name: 'Raisin Black' }, { hex: '#1e1e1e', name: 'Dark Charcoal' }, { hex: '#2b2b2b', name: 'Gray' },
    { hex: '#333333', name: 'Jet' }, { hex: '#282828', name: 'Onyx' }, { hex: '#212121', name: 'Raisin Black' }, { hex: '#1f1f1f', name: 'Smoky Black' },
    { hex: '#262626', name: 'Charleston Green' }, { hex: '#2e2e2e', name: 'Gray' }, { hex: '#363636', name: 'Jet' }, { hex: '#3a3a3a', name: 'Onyx' },
    { hex: '#424242', name: 'Outer Space' }, { hex: '#484848', name: 'Davys Gray' }, { hex: '#505050', name: 'Granite Gray' }, { hex: '#4a4a4a', name: 'Dark Gray' },
    { hex: '#454545', name: 'Davy Gray' }, { hex: '#404040', name: 'Charcoal' }, { hex: '#3c3c3c', name: 'Onyx' }, { hex: '#383838', name: 'Gray' },
    { hex: '#2f2f2f', name: 'Jet Black' }, { hex: '#2a2a2a', name: 'Night' }, { hex: '#292929', name: 'Raisin' }, { hex: '#272727', name: 'Black' },
    { hex: '#1a252f', name: 'Dark Blue' }, { hex: '#1b3a4b', name: 'Dark Cerulean' }, { hex: '#003b46', name: 'Deep Jungle' }, { hex: '#004346', name: 'Deep Teal' },
    { hex: '#004d40', name: 'Dark Teal' }, { hex: '#00695c', name: 'Dark Cyan' }, { hex: '#00796b', name: 'Teal' }, { hex: '#00695f', name: 'Blue Green' },
    { hex: '#005d57', name: 'Dark Teal' }, { hex: '#00524e', name: 'Deep Teal' }, { hex: '#004845', name: 'Pine Green' }, { hex: '#003d3a', name: 'Dark Green' },
    { hex: '#00332f', name: 'Dark Teal' }, { hex: '#002925', name: 'Deep Green' }, { hex: '#012622', name: 'Forest Green' }, { hex: '#01322f', name: 'Dark Teal' },
    { hex: '#013a3a', name: 'Deep Teal' }, { hex: '#014242', name: 'Dark Cyan' }, { hex: '#015958', name: 'Teal' }, { hex: '#016064', name: 'Deep Teal' },
    { hex: '#01676b', name: 'Teal Blue' }, { hex: '#03574e', name: 'Dark Teal' }, { hex: '#044a42', name: 'Brunswick Green' }, { hex: '#053f3c', name: 'Deep Teal' },
    { hex: '#063537', name: 'Dark Teal' }, { hex: '#072c30', name: 'Midnight Green' }, { hex: '#08272c', name: 'Dark Slate' }, { hex: '#0a2325', name: 'Rich Black' },
    { hex: '#0b1e20', name: 'Black Green' }, { hex: '#0c1a1b', name: 'Dark Gray' }, { hex: '#0d1516', name: 'Rich Black' }, { hex: '#0e1111', name: 'Black' },
    { hex: '#0f4c5c', name: 'Midnight Teal' }, { hex: '#104547', name: 'Dark Teal' }, { hex: '#113f42', name: 'Pine Green' }, { hex: '#12383d', name: 'Dark Teal' },
    { hex: '#133238', name: 'Deep Teal' }, { hex: '#142c33', name: 'Dark Slate' }, { hex: '#15262e', name: 'Gunmetal' }, { hex: '#162029', name: 'Rich Black' },
    { hex: '#171a24', name: 'Dark Gray' }, { hex: '#18141f', name: 'Black' }, { hex: '#0c4271', name: 'Dark Blue' }, { hex: '#0d5e96', name: 'Indigo' },
    { hex: '#0e7c7b', name: 'Dark Cyan' }, { hex: '#0f5959', name: 'Teal' }, { hex: '#104e4a', name: 'Deep Teal' }, { hex: '#11443c', name: 'Dark Green' },
    { hex: '#123a2e', name: 'Forest Green' }, { hex: '#133020', name: 'Dark Green' }, { hex: '#142612', name: 'Dark Olive' }, { hex: '#0a3d62', name: 'Dark Blue' },
    { hex: '#0e4c92', name: 'Sapphire' }, { hex: '#0f5b78', name: 'Teal Blue' }, { hex: '#106a5e', name: 'Dark Cyan' }, { hex: '#117944', name: 'Forest Green' },
    { hex: '#12882a', name: 'Green' }, { hex: '#13631a', name: 'Dark Green' }, { hex: '#14530e', name: 'Forest Green' }, { hex: '#154305', name: 'Dark Green' },
    { hex: '#163300', name: 'Deep Green' }, { hex: '#172808', name: 'Dark Olive' }, { hex: '#181d10', name: 'Rich Black' }, { hex: '#191218', name: 'Black' },
    { hex: '#1a1a1a', name: 'Black' }, { hex: '#1b1b1b', name: 'Rich Black' }, { hex: '#1c1c1c', name: 'Eerie Black' }, { hex: '#1d1d1d', name: 'Black' },
    { hex: '#1e1e1e', name: 'Dark Charcoal' }, { hex: '#1f1f1f', name: 'Smoky Black' }, { hex: '#202020', name: 'Raisin Black' }, { hex: '#232323', name: 'Onyx' },
    { hex: '#2f4f4f', name: 'Dark Slate Gray' }, { hex: '#2e4057', name: 'Dark Blue' }, { hex: '#2d3142', name: 'Gunmetal' }, { hex: '#2c2c2c', name: 'Gray' },
    { hex: '#2b2d42', name: 'Space Cadet' }, { hex: '#2a2e3c', name: 'Dark Gray' }, { hex: '#292f36', name: 'Gunmetal' }, { hex: '#283044', name: 'Dark Blue' }
];

// Vivid color palette (200+ colors including purple)
const vividColors = [
    { hex: '#ff6b6b', name: 'Coral Red' }, { hex: '#4ecdc4', name: 'Turquoise' }, { hex: '#45b7d1', name: 'Sky Blue' }, { hex: '#f7b731', name: 'Golden Yellow' },
    { hex: '#5f27cd', name: 'Royal Blue' }, { hex: '#00d2d3', name: 'Cyan' }, { hex: '#ff9ff3', name: 'Pink' }, { hex: '#54a0ff', name: 'Bright Blue' },
    { hex: '#48dbfb', name: 'Electric Blue' }, { hex: '#1dd1a1', name: 'Mint Green' }, { hex: '#10ac84', name: 'Green Sea' }, { hex: '#ee5a6f', name: 'Watermelon' },
    { hex: '#f368e0', name: 'Bright Pink' }, { hex: '#ff9f43', name: 'Orange' }, { hex: '#0abde3', name: 'Cool Blue' }, { hex: '#00b894', name: 'Caribbean Green' },
    { hex: '#00cec9', name: 'Robin Egg Blue' }, { hex: '#fd79a8', name: 'Carnation Pink' }, { hex: '#fdcb6e', name: 'Warm Yellow' }, { hex: '#e17055', name: 'Terra Cotta' },
    { hex: '#d63031', name: 'Red Orange' }, { hex: '#fab1a0', name: 'Flamingo' }, { hex: '#74b9ff', name: 'Baby Blue' }, { hex: '#a29bfe', name: 'Periwinkle' },
    { hex: '#ff7675', name: 'Light Red' }, { hex: '#fd79a8', name: 'Pink' }, { hex: '#fdcb6e', name: 'Light Orange' }, { hex: '#e84393', name: 'Hot Pink' },
    { hex: '#0984e3', name: 'Blue' }, { hex: '#6c5ce7', name: 'Iris' }, { hex: '#00b894', name: 'Mountain Meadow' }, { hex: '#00cec9', name: 'Teal' },
    { hex: '#ffeaa7', name: 'Yellow' }, { hex: '#ff7979', name: 'Red' }, { hex: '#ff6348', name: 'Orange Red' }, { hex: '#ff4757', name: 'Radical Red' },
    { hex: '#ff3838', name: 'Neon Red' }, { hex: '#ff2e63', name: 'Red' }, { hex: '#fc5c65', name: 'Red Orange' }, { hex: '#fd7272', name: 'Salmon' },
    { hex: '#fa8072', name: 'Light Salmon' }, { hex: '#ff6b81', name: 'Coral' }, { hex: '#ff5e78', name: 'Wild Watermelon' }, { hex: '#ff4d6d', name: 'Infra Red' },
    { hex: '#ff3c5f', name: 'Radical Red' }, { hex: '#ff2a51', name: 'Red' }, { hex: '#ff1843', name: 'Neon Red' }, { hex: '#ff0635', name: 'Vivid Red' },
    { hex: '#eb4559', name: 'Amaranth' }, { hex: '#e94560', name: 'Brick Red' }, { hex: '#e74c3c', name: 'Red Orange' }, { hex: '#e55039', name: 'Orange Red' },
    { hex: '#e35335', name: 'Flame' }, { hex: '#e15631', name: 'Vermillion' }, { hex: '#df592d', name: 'Red Orange' }, { hex: '#dd5c29', name: 'Cinnamon' },
    { hex: '#ff6f00', name: 'Orange' }, { hex: '#ff8800', name: 'Dark Orange' }, { hex: '#ffa100', name: 'Orange Peel' }, { hex: '#ffba00', name: 'Selective Yellow' },
    { hex: '#ffd300', name: 'Cyber Yellow' }, { hex: '#ffec00', name: 'Yellow' }, { hex: '#f9ca24', name: 'Saffron' }, { hex: '#f6b93b', name: 'Casablanca' },
    { hex: '#f39c12', name: 'Orange' }, { hex: '#e67e22', name: 'Carrot Orange' }, { hex: '#d35400', name: 'Pumpkin' }, { hex: '#f39c6b', name: 'Apricot' },
    { hex: '#f0932b', name: 'Yellow Orange' }, { hex: '#eb974e', name: 'Sandy Brown' }, { hex: '#e67e22', name: 'Carrot' }, { hex: '#e17055', name: 'Burnt Sienna' },
    { hex: '#d35400', name: 'Alloy Orange' }, { hex: '#c0392b', name: 'Dark Red' }, { hex: '#e74c3c', name: 'Alizarin Crimson' }, { hex: '#ec7063', name: 'Light Red' },
    { hex: '#f1948a', name: 'Light Coral' }, { hex: '#f5b7b1', name: 'Pale Red' }, { hex: '#ff6b9d', name: 'Carnation' }, { hex: '#ff5e78', name: 'Brink Pink' },
    { hex: '#ff4d6a', name: 'Neon Pink' }, { hex: '#ff3c5c', name: 'Radical Red' }, { hex: '#ff2a4e', name: 'Red' }, { hex: '#ff1840', name: 'Neon Red' },
    { hex: '#fc427b', name: 'Wild Strawberry' }, { hex: '#f953c6', name: 'Hot Pink' }, { hex: '#e95095', name: 'Fandango' }, { hex: '#d946ef', name: 'Orchid' },
    { hex: '#c44569', name: 'Blush' }, { hex: '#b33771', name: 'Magenta' }, { hex: '#a8205a', name: 'Maroon' }, { hex: '#ff1744', name: 'Red Accent' },
    { hex: '#ff5252', name: 'Red' }, { hex: '#ff6e40', name: 'Deep Orange' }, { hex: '#ff9100', name: 'Orange' }, { hex: '#ffab40', name: 'Light Orange' },
    { hex: '#ffc400', name: 'Amber' }, { hex: '#ffea00', name: 'Yellow' }, { hex: '#ffff00', name: 'Pure Yellow' }, { hex: '#f4d03f', name: 'Sandstorm' },
    { hex: '#f7dc6f', name: 'Arylide Yellow' }, { hex: '#f9e79f', name: 'Khaki' }, { hex: '#fcf3cf', name: 'Lemon Chiffon' }, { hex: '#fef5e7', name: 'Cream' },
    { hex: '#c9ff00', name: 'Electric Lime' }, { hex: '#a4ff00', name: 'Chartreuse' }, { hex: '#7fff00', name: 'Lawn Green' }, { hex: '#5aff00', name: 'Bright Green' },
    { hex: '#35ff00', name: 'Neon Green' }, { hex: '#10ff00', name: 'Green' }, { hex: '#00ff00', name: 'Lime' }, { hex: '#00eb00', name: 'Vivid Green' },
    { hex: '#00d700', name: 'Green' }, { hex: '#00c300', name: 'Dark Green' }, { hex: '#00af00', name: 'Lime Green' }, { hex: '#009b00', name: 'Green' },
    { hex: '#32cd32', name: 'Lime Green' }, { hex: '#2ecc71', name: 'Emerald' }, { hex: '#27ae60', name: 'Nephritis' }, { hex: '#1abc9c', name: 'Turquoise' },
    { hex: '#16a085', name: 'Green Sea' }, { hex: '#26de81', name: 'Medium Spring Green' }, { hex: '#20bf6b', name: 'Shamrock Green' }, { hex: '#0fb9b1', name: 'Light Sea Green' },
    { hex: '#00d8d6', name: 'Bright Turquoise' }, { hex: '#00e7e5', name: 'Electric Turquoise' }, { hex: '#00f7f5', name: 'Cyan' }, { hex: '#00ffff', name: 'Aqua' },
    { hex: '#00ebff', name: 'Turquoise Blue' }, { hex: '#00d7ff', name: 'Bright Sky Blue' }, { hex: '#00c3ff', name: 'Vivid Sky Blue' }, { hex: '#00afff', name: 'Deep Sky Blue' },
    { hex: '#009bff', name: 'Azure' }, { hex: '#0087ff', name: 'Electric Blue' }, { hex: '#0073ff', name: 'Blue' }, { hex: '#005fff', name: 'Vivid Blue' },
    { hex: '#3498db', name: 'Dodger Blue' }, { hex: '#2980b9', name: 'Belize Hole' }, { hex: '#2c3e50', name: 'Wet Asphalt' }, { hex: '#34495e', name: 'Midnight Blue' },
    { hex: '#0fbcf9', name: 'Light Blue' }, { hex: '#05c3ff', name: 'Vivid Cerulean' }, { hex: '#00baff', name: 'Spiro Disco Ball' }, { hex: '#00b0ff', name: 'Cyan' },
    { hex: '#00a6ff', name: 'Bright Blue' }, { hex: '#009cff', name: 'Azure' }, { hex: '#0092ff', name: 'Blue' }, { hex: '#0088ff', name: 'Vivid Blue' },
    { hex: '#007eff', name: 'Cobalt Blue' }, { hex: '#0074ff', name: 'Royal Blue' }, { hex: '#006aff', name: 'Electric Indigo' }, { hex: '#0060ff', name: 'Blue' },
    { hex: '#4169e1', name: 'Royal Blue' }, { hex: '#5578eb', name: 'Palatinate Blue' }, { hex: '#6a89cc', name: 'United Nations Blue' }, { hex: '#7e9bdf', name: 'Vista Blue' },
    { hex: '#92adf2', name: 'Jordy Blue' }, { hex: '#a6bfff', name: 'Pale Azure' }, { hex: '#bad1ff', name: 'Baby Blue' }, { hex: '#cee3ff', name: 'Alice Blue' },
    { hex: '#9b59b6', name: 'Amethyst' }, { hex: '#8e44ad', name: 'Wisteria' }, { hex: '#7d3c98', name: 'Deep Purple' }, { hex: '#6c3483', name: 'Royal Purple' },
    { hex: '#5b2c6f', name: 'Dark Purple' }, { hex: '#884ea0', name: 'Purple' }, { hex: '#7d3c98', name: 'Deep Lilac' }, { hex: '#6c2dc7', name: 'Violet' },
    { hex: '#8e44ad', name: 'Purple Heart' }, { hex: '#a569bd', name: 'Light Purple' }, { hex: '#bb8fce', name: 'Lavender Purple' }, { hex: '#d2b4de', name: 'Pale Purple' },
    { hex: '#e8daef', name: 'Lavender' }, { hex: '#9b59b6', name: 'Amethyst' }, { hex: '#8b4cb8', name: 'Purple' }, { hex: '#7b3fba', name: 'Vivid Violet' },
    { hex: '#6b32bc', name: 'Electric Purple' }, { hex: '#5b25be', name: 'Deep Purple' }, { hex: '#9966cc', name: 'Amethyst' }, { hex: '#aa66cc', name: 'Medium Purple' },
    { hex: '#bb77dd', name: 'Lavender' }, { hex: '#cc88ee', name: 'Violet' }, { hex: '#dd99ff', name: 'Pale Violet' }, { hex: '#bf40bf', name: 'Vivid Magenta' },
    { hex: '#cf52cf', name: 'Orchid' }, { hex: '#df64df', name: 'Fuchsia' }, { hex: '#ef76ef', name: 'Light Magenta' }, { hex: '#ff88ff', name: 'Pale Magenta' },
    { hex: '#ba55d3', name: 'Medium Orchid' }, { hex: '#9370db', name: 'Medium Purple' }, { hex: '#8a2be2', name: 'Blue Violet' }, { hex: '#9932cc', name: 'Dark Orchid' },
    { hex: '#9400d3', name: 'Dark Violet' }, { hex: '#a020f0', name: 'Purple' }, { hex: '#b030ff', name: 'Vivid Purple' }, { hex: '#c040ff', name: 'Electric Violet' }
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
