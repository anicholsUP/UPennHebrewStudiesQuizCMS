export default {
    name: 'question',
    type: 'object',
    title: 'Question',
    fields: [
        {name: "text", type: 'string', title: 'Text'},
        {name: "endline", type: 'boolean', title: 'End Line'},
        {name: 'options', Title: 'Options', type: 'array', of: [{type: 'object', name: 'option', fields: [
            {name: 'answer', type: 'string', title: 'Answer'},
            {name: 'correct', type: 'boolean', title: 'Correct'}
        ]}]}
    ]
}