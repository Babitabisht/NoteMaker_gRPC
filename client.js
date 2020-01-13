const grpc = require('grpc');
const PROTO_PATH = './notes.proto';
var protoLoader = require('@grpc/proto-loader');

// const NoteService = grpc.load(PROTO_PATH).NoteService;

var NoteService = grpc.loadPackageDefinition(
  protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
);

const client = new NoteService.example.NoteService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

module.exports = client;
