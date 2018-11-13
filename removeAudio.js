const FFmpeg = require('fluent-ffmpeg');

const datetime = new Date();
const conversion_process =

    new FFmpeg({ source: "./videoSong.mp4", timeout:0})
        .withAudioCodec('libmp3lame')

        .withNoAudio()

        .toFormat('mp4')

        .on('start', function(commandLine)

        {console.log(datetime + " DEBUG: " + "Video Extraction Started"); })

        .on('error', function(err, stdout, stderr)

        {console.log(datetime + " DEBUG: " + "Video Extraction Failed."); console.log(err);})

        .on('progress', function(progress)

        {console.log(datetime + " DEBUG: " + "Video Extraction Percentage ..." + progress.percent); })

        .on('end', function()

        { console.log(datetime + " DEBUG: " + "Video Extraction Ended"); })

        .saveToFile("./result/extractedVideo.mp4");