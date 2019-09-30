
let messages = [];
let currentID = 0;

module.exports = {
    create: function (req, res) {
        const {text, time} = req.body;
        let curId = currentID++;
        let message = {
            id: curId,
            text: text,
            time: time
        }
        messages.push(message)
        console.log(messages, 'read')
        res.status(200).send(messages);
    },

    read: function (req, res) {
        
        console.log('reading');
        console.log(messages, 'reading')
        res.status(200).send(messages);
    },

    update: function (req, res) {
        const {text} = req.body;
        const {id} = req.params;
        const messageId = messages.findIndex(e => e.id === +id);
        
        messages[messageId].text = text

        res.status(200).send(messages);
        console.log(messages, 'update')
    },

    delete: function (req, res) {
        const {id} = req.params;
        const messageId = messages.findIndex(e => e.id === +id);
        messages.splice(messageId, 1);
        console.log(messages, 'delete')
        res.status(200).send(messages);
    }
}
