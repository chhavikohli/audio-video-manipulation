//ffmpeg -i ./result/extractedVideo.mp4 -i ./result/extractedAudio2.mp3 -c:v copy -c:a copy  ./result/extractedoutput.mp4
const FFmpeg = require('fluent-ffmpeg');

const datetime = new Date();
const conversion_process =

    new FFmpeg({ source: "./result/extractedVideo.mp4", timeout:0})
        .withAudioCodec('libmp3lame')



        .toFormat('mp4')

        .on('start', function(commandLine)

        {console.log(datetime + " DEBUG: " + "Video Extraction Started"); })

        .on('error', function(err, stdout, stderr)

        {console.log(datetime + " DEBUG: " + "Video Extraction Failed."); console.log(err);})

        .on('progress', function(progress)

        {console.log(datetime + " DEBUG: " + "Video Extraction Percentage ..." + progress.percent); })

        .on('end', function()

        { console.log(datetime + " DEBUG: " + "Video Extraction Ended"); })

        .saveToFile("./result/extractedoutput.mp4");