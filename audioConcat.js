
const FFmpeg = require('fluent-ffmpeg');
const SoxCommand = require('sox-audio');
const command = SoxCommand()
    .input('./filename.wav')
    .input('./filename2.wav')
    .output('./out.wav');


command.on('prepare', function(args) {
    console.log('Preparing sox command with args ' + args.join(' '));
});

command.on('start', function(commandLine) {
    console.log('Spawned sox with command ' + commandLine);
});

command.on('progress', function(progress) {
    console.log('Processing progress: ', progress.percent);
});

command.on('error', function(err, stdout, stderr) {
    console.log('Cannot process audio: ' + err.message);

});

command.on('end', function() {
    console.log('Sox command succeeded!');
});

command.run();
