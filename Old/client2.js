var conn

var peer = new Peer("random-id")

var conn 

peer.on('open', function(id) {
   console.log('My peer ID is: ' + id);
   console.log('My peer ID is: ' + peer.id);
   document.getElementById("peerId").innerHTML = id;
});
//receive
peer.on('connection', function(newConn) {
   console.log("Connection made")
   console.log(newConn)
   newConn.on('open', function() {
      newConn.on('data', function(data) {
         console.log("Received")
         console.log(data)
         console.log(peer)
      })
   })
})

var peerConn
function myFunction() {
   const peerId = document.getElementById("box").value
   console.log("Sending test to ", peerId)
   peerConn = peer.connect(peerId);
   peerConn.on('open', function(){
      peerConn.send("test")
   })
}

function myFunction2(){
   peerConn.send("test")
}


// var peer = new Peer();

// peer.on('open', function(id) {
//    console.log('My peer ID is: ' + id);
//    console.log('My peer ID is: ' + peer.id);
// });

// peer.on('connection', function(conn) {

//    // console.log("Peer connection open")
//    // conn.on('data', function(data) {
//    //    console.log("Peer connection open open received")
//    //    console.log('Received', data);
//    // });
//    // conn.send("Hello back")

//    conn.on('data', function(data){
//       console.log("Data received: "+data);
//       document.getElementById("playArea").value = data;
//    });
//    console.log("Connected")
// });

// peer.on('error', function(err){ 
//    console.log("Oh no an error")
//    console.log(err)
// })

// function myFunction() {
//    const peerId = document.getElementById("box").value
//    var conn = peer.connect(peerId);
//    const data = "Hello Wrold"
//    conn.send(data)

//    conn.on('open',function(){
//       console.log("Peer2 ready?")
//       console.log("open")
//       conn.on('data', function(data){
//          console.log("Peer2?")
//          console.log("Data received: "+data);
//          document.getElementById("playArea").value = data;
//       });
//    })
//    console.log(`Sending hello world to ${peerId}`)
//    console.log("Data sent", data)

// }