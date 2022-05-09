import growl from 'notify-send';
import Play from 'play-sound';

growl.normal.notify('Announcement', 'Meeting in 15 minutes');

new Play({ timeout: 5 }).play('./assets/warning.mp3', function (err) {
    if (err) throw err
})