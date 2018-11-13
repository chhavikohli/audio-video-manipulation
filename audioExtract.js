const FFmpeg = require('fluent-ffmpeg');

const datetime = new Date();
const conversion_process =

    new FFmpeg({ source: "./videosong2.mp4", timeout:0})
        .withAudioCodec('libmp3lame')

        .withAudioBitrate(128)

        .withAudioChannels(2)

        .withAudioFrequency(44100)

        .withAudioQuality(5)

        .toFormat('mp3')

        .on('start', function(commandLine)

        {console.log(datetime + " DEBUG: " + "Audio Extraction Started"); })

        .on('error', function(err, stdout, stderr)

        {console.log(datetime + " DEBUG: " + "Audio Extraction Failed."); console.log(err);})

        .on('progress', function(progress)

        {console.log(datetime + " DEBUG: " + "Audio Extraction Percentage ..." + progress.percent); })

        .on('end', function()

        { console.log(datetime + " DEBUG: " + "Audio Extraction Ended"); })

        .saveToFile("./result/extractedAudio2.mp3");