
// Initialize admin dashboard with complete discography
const ALBUMS_DATA = [
  {
    "id": 1,
    "name": "Faded 405",
    "artist": "DoubleU",
    "releaseDate": "2026-02-27",
    "tracks": 12,
    "status": "Active",
    "description": "DoubleU's landmark 2026 album featuring 12 tracks of soul-trap and pain-rap production. From Oklahoma City, redefining the sound of the modern grind."
  }
];
const SONGS_DATA = [
  {
    "id": 1,
    "title": "Fading Out",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:28",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 2,
    "title": "Run From The Voices",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "2:44",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 3,
    "title": "Devil in the Rear View",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:12",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 4,
    "title": "Shattered Echos",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "2:58",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 5,
    "title": "Found You in the Rainfall",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:34",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 6,
    "title": "Shadow Boxer",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "2:49",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 7,
    "title": "Faded Frame",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:53",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 8,
    "title": "The Anniversary",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:45",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 9,
    "title": "Zero Sum",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:00",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 10,
    "title": "The Carpenter's Hands",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:32",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 11,
    "title": "Finally Free",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:20",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 12,
    "title": "New Foundations",
    "album": "Faded 405",
    "artist": "DoubleU",
    "duration": "3:15",
    "releaseDate": "2026-02-27",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 13,
    "title": "A Place To Land",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:40",
    "releaseDate": "2026-04-24",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 14,
    "title": "Cold Sheets, Wide Eyes",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:15",
    "releaseDate": "TBA",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 15,
    "title": "Zero Sum",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:00",
    "releaseDate": "2026-01-22",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 16,
    "title": "Found You in the Rainfall",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:34",
    "releaseDate": "TBA",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 17,
    "title": "Aint New To Me",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:10",
    "releaseDate": "TBA",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 18,
    "title": "Closer Than Closer",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:05",
    "releaseDate": "TBA",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 19,
    "title": "Fresh",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:22",
    "releaseDate": "TBA",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 20,
    "title": "Trippin' (feat. Papa Metree)",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:18",
    "releaseDate": "TBA",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 21,
    "title": "Package Deal (ft. Papa Metree)",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:25",
    "releaseDate": "TBA",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 22,
    "title": "Real Life Trauma",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:40",
    "releaseDate": "TBA",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  },
  {
    "id": 23,
    "title": "Two Of Us",
    "album": "Single",
    "artist": "DoubleU",
    "duration": "3:50",
    "releaseDate": "2021-10-08",
    "youtube": "https://www.youtube.com/@DoubleUOTB",
    "spotify": "https://open.spotify.com/artist/doubleu",
    "appleMusic": "https://music.apple.com/us/artist/doubleu/1586705800"
  }
];

// Initialize localStorage with data
function initializeAdminData() {
    localStorage.setItem('albums', JSON.stringify(ALBUMS_DATA));
    localStorage.setItem('songs', JSON.stringify(SONGS_DATA));
}

initializeAdminData();

