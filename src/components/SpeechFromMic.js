import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import { ServicePropertiesPropertyName } from 'microsoft-cognitiveservices-speech-sdk/distrib/lib/src/common.speech/Exports';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

export const SpeechFromMic = (tokenObj) => {
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        speechConfig.speechRecognitionLanguage = 'en-UK';
        
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
    
        this.setState({
            displayText: 'speak...'
        });
    
        recognizer.recognizeOnceAsync(result => {
            let displayText;
            if (result.reason === ResultReason.RecognizedSpeech) {
                displayText = `RECOGNIZED: Text=${result.text}`
            } else {
                displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
            }
    
            this.setState({
                displayText: displayText
            });
        });
}