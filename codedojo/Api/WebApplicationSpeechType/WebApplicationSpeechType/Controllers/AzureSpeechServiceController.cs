using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CognitiveServices.Speech;
using Microsoft.CognitiveServices.Speech.Audio;
using System.Text.Json.Nodes;
using WebApplicationSpeechType.Utils.BlobStorage;

namespace WebApplicationSpeechType.Controllers
    {
    [Route("api/speech")]
    [ApiController]
    public class AzureSpeechServiceController : ControllerBase
        {

        private readonly string containerName = "conteinerspeechtype";

        private readonly string connectionString = "DefaultEndpointsProtocol=https;AccountName=blobspeechtype;AccountKey=afLaqsnjKIGaJrvGk3yaUhY1pO5tjPMGZClwSOIpVtQYMO43A1wNoYF05QIymmclgKOSUcP3wb0d+AStlhMhCw==;EndpointSuffix=core.windows.net";

        [HttpPost("TextToVoice")]
        public async Task<IActionResult> TextToVoice([FromBody] string text)
            {

            var speechConfig = SpeechConfig.FromSubscription("42a0b925e1c44abab0467a7f23115682", "brazilsouth");
            speechConfig.SpeechSynthesisVoiceName = "pt-BR-JulioNeural";

            using (var speechSynthesizer = new SpeechSynthesizer(speechConfig))
                {
                var speechSynthesisResult = await speechSynthesizer.SpeakTextAsync(text);

                var audioData = speechSynthesisResult.AudioData;

                var uploadedAudio = await BlobStorageHelper.UploadAudioBlobAsync(audioData, connectionString, containerName);

                if (speechSynthesisResult.Reason == ResultReason.SynthesizingAudioCompleted)
                    {
                    return Ok(uploadedAudio);
                    }
                else
                    {
                    return BadRequest(new { Message = "Conversao de texto para voz falhou." });
                    }
                }

            }

        [HttpPost("VoiceToText")]
        public async Task<IActionResult> VoiceToText(string link)
            {

            try
                {

                var speechConfig = SpeechConfig.FromSubscription("42a0b925e1c44abab0467a7f23115682", "brazilsouth");
                speechConfig.SpeechRecognitionLanguage = "pt-BR";

                using var httpClient = new HttpClient();

                using var pushStream = AudioInputStream.CreatePushStream();

                using var audioConfig = AudioConfig.FromStreamInput(pushStream);

                using var speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);

                var speechRecognitionResponse = await speechRecognizer.RecognizeOnceAsync();

                var audioData = await httpClient.GetByteArrayAsync(link);



                

                pushStream.Write(audioData);
                pushStream.Close();

                switch (speechRecognitionResponse.Reason)
                    {


                    case ResultReason.RecognizedSpeech:
                        Console.WriteLine($"RECONIZED:  Text= {speechRecognitionResponse.Text}");
                        return Ok(speechRecognitionResponse.Text);

                    case ResultReason.NoMatch:
                        return BadRequest("Nao conseguiu ler o audio");

                    case ResultReason.Canceled:
                        var cancellation = CancellationDetails.FromResult(speechRecognitionResponse);
                        return BadRequest(cancellation.Reason);

                    }
                return null;

                }
            catch (Exception e)
                {
                return BadRequest(e.Message);
                }
            }
        }

    }
