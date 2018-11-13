//sox ./result/extractedAudio2.mp3 ./filename2.wav
//sox -m ./filename.wav ./filename2.wav output_test---------.mp3
const FFmpeg = require('fluent-ffmpeg');
const SoxCommand = require('sox-audio');
const command = SoxCommand()
    .input('./result/filename.wav')
    .input('./result/filename2.wav')
    .combine('mix')
    .output('./out.wav')

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




function toWav(audio){
    const conversion_process =

        new FFmpeg({ source: audio, timeout:0})
            .withAudioCodec('libmp3lame')


            .toFormat('wav')

            .on('start', function(commandLine)

            {console.log( "Audio Extraction Started-------------------"); })

            .on('error', function(err, stdout, stderr)

            {console.log( "Audio Extraction Failed."); console.log(err);})

            .on('progress', function(progress)

            {console.log( "Audio Extraction Percentage ..." + progress.percent); })

            .on('end', function()

            { console.log( "Audio Extraction Ended-----------------------------------"); })

            .saveToFile("./result/extractedAudio2Wav.wav");
}
/*
toWav("./result/extractedAudio2.mp3");*/
