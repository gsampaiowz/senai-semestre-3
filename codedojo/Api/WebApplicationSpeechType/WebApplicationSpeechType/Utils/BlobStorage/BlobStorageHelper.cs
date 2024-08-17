using Azure.Storage.Blobs;
using Microsoft.CognitiveServices.Speech;
using Microsoft.CognitiveServices.Speech.Audio;

namespace WebApplicationSpeechType.Utils.BlobStorage
    {
    public class BlobStorageHelper
        {
        public static async Task<string> UploadAudioBlobAsync(byte[] bytes, string stringConexao, string nomeContainer)
            {
            try
                {
                var blobName = Guid.NewGuid().ToString().Replace("-", "") + ".wav";

                var blobServiceClient = new BlobServiceClient(stringConexao);

                var blobContainerClient = blobServiceClient.GetBlobContainerClient(nomeContainer);

                var blobClient = blobContainerClient.GetBlobClient(blobName);

                using var stream = new MemoryStream(bytes);

                await blobClient.UploadAsync(stream, true);

                return blobClient.Uri.ToString();

                }
            catch (Exception)
                {
                throw;
                }
            }


        }
    }
