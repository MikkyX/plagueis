/**
 * Created by MikkyX on 13/03/2017.
 */
sithStory = [
    {'delay': 2000, 'line': 'Did you ever hear the tragedy of Darth Plagueis "the wise"?', 'speaker': 'palpatine'},
    {'delay': 11000, 'line': 'No.', 'speaker': 'anakin'},
    {'delay': 12000, 'line': 'I thought not.', 'speaker': 'palpatine'},
    {'delay': 13000, 'line': 'It\'s not a story the Jedi would tell you.', 'speaker': 'palpatine'},
    {'delay': 17000, 'line': 'It\'s a Sith legend.', 'speaker': 'palpatine'},
    {'delay': 20000, 'line': 'Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midi-chlorians to create life ...', 'speaker': 'palpatine'},
    {'delay': 37000, 'line': 'He had such a knowledge of the dark side that he could even keep the ones he cared about from dying.', 'speaker': 'palpatine'},
    {'delay': 52000, 'line': 'He could actually save people from death?', 'speaker': 'anakin'},
    {'delay': 56000, 'line': 'The dark side of the Force is a pathway to many abilities some consider to be unnatural.', 'speaker': 'palpatine'},
    {'delay': 66000, 'line': 'What happened to him?', 'speaker': 'anakin'},
    {'delay': 69000, 'line': 'He became so powerful...', 'speaker': 'palpatine'},
    {'delay': 72000, 'line': 'The only thing he was afraid of was losing his power, which eventually, of course, he did.', 'speaker': 'palpatine'},
    {'delay': 81000, 'line': 'Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep.', 'speaker': 'palpatine'},
    {'delay': 94000, 'line': 'It\'s ironic he could save others from death, but not himself.', 'speaker': 'palpatine'},
    {'delay': 105000, 'line': 'Is it possible to learn this power?', 'speaker': 'anakin'},
    {'delay': 111000, 'line': 'Not from a Jedi...', 'speaker': 'palpatine'},
];

sithStory.forEach(function(line) {
    var lineColour = (line.speaker == 'anakin' ? '#0000cc' : '#cc0000');
    setTimeout(function() {
        console.log('%c '+line.line,'color: '+lineColour);
    },line.delay);
});
