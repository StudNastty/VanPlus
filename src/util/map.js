module.exports = {
    gridDiameter: 146.25,

    getGridPos: function (x, y, mapSize) {
        let remainder = mapSize % module.exports.gridDiameter;
        let offset = module.exports.gridDiameter - remainder;
        let correctedMapSize = (remainder < 120) ? mapSize - remainder : mapSize + offset;

        /* Outside the grid system */
        if (x < 0 || x > correctedMapSize || y < 0 || y > correctedMapSize) {
            return null;
        }

        const gridPosLetters = module.exports.getGridPosLettersX(x, correctedMapSize);
        const gridPosNumber = module.exports.getGridPosNumberY(y, correctedMapSize);

        return gridPosLetters + gridPosNumber;
    },

    getGridPosLettersX: function (x, mapSize) {
        let num = 1;
        for (let startGrid = 0; startGrid < mapSize; startGrid += module.exports.gridDiameter) {
            if (x >= startGrid && x <= (startGrid + module.exports.gridDiameter)) {
                /* We're at the correct grid! */
                return module.exports.numberToLetters(num);
            }
            num++;
        }
    },

    getGridPosNumberY: function (y, mapSize) {
        let counter = 1;
        let numberOfGrids = Math.floor(mapSize / module.exports.gridDiameter);
        for (let startGrid = 0; startGrid < mapSize; startGrid += module.exports.gridDiameter) {
            if (y >= startGrid && y <= (startGrid + module.exports.gridDiameter)) {
                /* We're at the correct grid! */
                return numberOfGrids - counter;
            }
            counter++;
        }
    },

    numberToLetters: function (num) {
        let mod = num % 26;
        let pow = num / 26 | 0;
        var out = mod ? String.fromCharCode(64 + mod) : (pow--, 'Z');
        return pow ? module.exports.numberToLetters(pow) + out : out;
    },

    getAngleBetweenPoints: function (x1, y1, x2, y2) {
        let angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

        if (angle < 0) {
            angle = 360 + angle;
        }

        return (Math.abs(angle - 360) + 90) % 360;
    },

    getDistance: function (x1, y1, x2, y2) {
        /* Pythagoras is the man! */
        const a = x1 - x2;
        const b = y1 - y2;
        return Math.sqrt(a * a + b * b);
    },

    isOutsideGridSystem: function (x, y, mapSize, offset = 0) {
        if (x < -offset || x > (mapSize + offset) ||
            y < -offset || y > (mapSize + offset)) {
            return true;
        }
        return false;
    },

    getPointDirection: function (x, y, size) {
        /* Returns the direction of the coordinate. */
        let offset = size / 6;
        let dir;

        /* Vertically */
        if (y < offset) {
            dir = 0;
        }
        else if (y > (offset * 5)) {
            dir = 3;
        }
        else {
            if (x < (offset * 3))
                return module.exports.directions[6];
            else
                return module.exports.directions[7];
        }

        /* Horizontally */
        if (x < offset) {
            dir += 0;
        }
        else if (x > (offset * 5)) {
            dir += 2;
        }
        else {
            dir += 1;
        }

        return module.exports.directions[dir];
    },

    directions: {
        0: 'South West',
        1: 'the South',
        2: 'South East',
        3: 'North West',
        4: 'the North',
        5: 'North East',
        6: 'the West',
        7: 'the East'
    },
}