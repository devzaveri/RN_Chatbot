import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ElevenLabsProvider, useConversation } from '@elevenlabs/react-native';
import SeasonScreen from './SeasonScreen'

const App = () => {
 
//   const elevenlabs = new ElevenLabsClient({
//     apiKey: "sk_42fc81c748b02ac3bee3853d24cc3f455bb6faa450d1669a", // Defaults to process.env.ELEVENLABS_API_KEY
// });
//   const handleFunction = async ()=> {
//     const audio = await elevenlabs.textToSpeech.convert(
//   'JBFqnCBsd6RMkjVDRZzb', // voice_id
//   {
//     text: 'The first move is what sets everything in motion.',
//     modelId: 'eleven_multilingual_v2',
//     outputFormat: 'mp3_44100_128', // output_format
//   }
// );
// await play(audio);
//   }
  return (
    <ElevenLabsProvider>
      <SeasonScreen />
   
    </ElevenLabsProvider>
  )
}

export default App