const formatVolumeIconPath = require('../assets/scripts/main.js');  
describe('Test all possible branches of the volumeIcon', () => {
    test('high volume', () => {
        expect(formatVolumeIconPath(100)).toEqual(`./assets/media/icons/volume-level-3.svg`);
    });
    test('medium volume', () => {
        expect(formatVolumeIconPath(40)).toEqual(`./assets/media/icons/volume-level-2.svg`);
    });
    test('low volume', () => {
        expect(formatVolumeIconPath(10)).toEqual(`./assets/media/icons/volume-level-1.svg`);
    });
    test('no volume', () => {
        expect(formatVolumeIconPath(0)).toEqual(`./assets/media/icons/volume-level-0.svg`);
    });
});
