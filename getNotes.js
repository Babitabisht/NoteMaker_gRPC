const client = require('./client');

client.list({}, (error, notes) => {
  if (!error) {
    console.log('successfully fetch List notes', notes);
    // console.log(notes);
  } else {
    console.error(error);
  }
});
