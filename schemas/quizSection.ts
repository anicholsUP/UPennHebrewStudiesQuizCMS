export default {
    name: 'quizsection',
    type: 'object',
    title: 'Quiz Section',
    fields: [
        {name: "instructionseng", type: 'text', title: 'Instructions(Eng)'},
        {name: "instructionsheb", type: 'text', title: 'Instructions(Heb)'},
        {name: "referencetext", type: 'text', title: 'Reference Text'},
        {name: "referenceaudio", type: 'string', title: 'Reference Audio(Google Drive Share Link)'},
        {name: 'questions', Title: 'Questions', type: 'array', of: [{type: 'question'}]}
    ]
}