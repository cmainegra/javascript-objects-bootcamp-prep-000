var playlist = {
  Chicago: "Saturday in the Park"
}
function updatePlaylist(playlist, artistName, songTitle) {
 return Object.assign({}, playlist, {[artistName]: songTitle});
}
function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
 delete playlist[artistName];
 return playlist;
=======
 var newPlaylist = delete playlist.artistName;
 return newPlaylist;
>>>>>>> 08d97abb1b57b6ca59f14667b57fe77a4f047312
}