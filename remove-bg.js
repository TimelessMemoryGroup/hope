const path = require('path');
const Jimp = require('jimp');

async function removeBackground() {
    try {
        const image = await Jimp.read('TM HOPE ICON.png');
        console.log('Image read. Processing...');

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];
            
            // Calculate Euclidean distance or simple distance to pure white
            const dist = (255 - red) + (255 - green) + (255 - blue);

            // Using exactly the logic evaluated earlier
            if(dist < 20) {
                // If practically white, make invisible
                this.bitmap.data[idx + 3] = 0; 
            } else if (dist < 100) {
                // Smooth falloff
                let ratio = (dist - 20) / 80;
                ratio = ratio * ratio; // sharp transition
                this.bitmap.data[idx + 3] = Math.max(0, Math.min(255, this.bitmap.data[idx + 3] * ratio));
            }
        });

        await image.writeAsync('TM_HOPE_ICON_TRANSPARENT.png');
        console.log("Success! Saved as TM_HOPE_ICON_TRANSPARENT.png");
    } catch (err) {
        console.error(err);
    }
}

removeBackground();
