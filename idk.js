function saveResponse() {
    var response = document.getElementById("response-text").value;
    // Aquí puedes agregar código para guardar la respuesta en una base de datos o enviarla a un servidor
    console.log("Response saved: " + response);
}

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Response = mongoose.model('Response', responseSchema);
module.exports = Response;


const mongoose = require('mongoose');

mongoose.connect('mongodb://<jonathan9p909>:<jona9p909876>@ds<dbnumber>.mlab.com:<dbnumber>/<dbname>', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to MongoDB.');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});
