const getFile = (song, file) => {
  return {
    audio: `/songs/${song}/${file}.mp3`,
    active: `/songs/${song}/images/${file}-active.png`,
    idle: `/songs/${song}/images/${file}-idle.png`
  };
};

const tracks = [
  {
    number: 1,
    title: "Re-Do",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=6rgbYAZeZJI",
      image: "redo.jpg"
    }
  },
  {
    number: 2,
    title: "Tears Over Beers",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=kxViktJCHlg",
      image: "tearsoverbeers.jpg"
    }
  },
  {
    number: 3,
    title: "The Weekend",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=cIy2wyEV0qc",
      image: "theweekend.jpg"
    }
  },
  {
    number: 4,
    title: "@chl03k",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=mQsV5-O5ZtI",
      image: "chl03k.jpg"
    }
  },
  {
    number: 5,
    title: "Hours Outside in the Snow",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=OWFvYXmlfmQ",
      image: "hoursoutside.jpg"
    }
  },
  {
    number: 6,
    title: "I Think You Were In My Profile Picture Once",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=QpYykHrG3LI",
      image: "profilepicture.jpg"
    }
  },
  {
    number: 7,
    title: "Re-Done",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=vwVMhvH4KKI",
      image: "redone.jpg"
    }
  },
  {
    number: 8,
    title: "Cooke",
    info: "115bpm – Tuned 1/2 step down - G/C/Em",
    song: {
      link: "https://www.youtube.com/watch?v=4hxRRAWffVk",
      image: "cooke.jpg"
    },
    parts: [
      {
        title: "Metronome",
        file: getFile("08cooke", "metronome"),
        muted: true
      },
      {
        title: "Guitar 1",
        file: getFile("08cooke", "guitar1"),
        muted: false
      },
      {
        title: "Guitar 2",
        file: getFile("08cooke", "guitar2"),
        muted: false
      },
      {
        title: "Guitar 3",
        file: getFile("08cooke", "guitar3"),
        muted: false
      }
    ]
  },
  {
    number: 9,
    title: "See Ya, Sucker",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=mhFBV1Nmq2c",
      image: "seeyasucker.jpg"
    }
  },
  {
    number: 10,
    title: "Look Out",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=EpBS17K-KPQ",
      image: "lookout.jpg"
    }
  },
  {
    number: 11,
    title: "Play Ball!",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=zyxf4TqUCFk",
      image: "playball.jpg"
    }
  },
  {
    number: 12,
    title: "Coals",
    info: "",
    song: {
      link: "https://www.youtube.com/watch?v=M4wXqWEaU94",
      image: "coals.gif"
    }
  }
];

export default tracks;
