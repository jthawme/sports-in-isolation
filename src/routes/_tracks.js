const getFile = (song, file) => {
  return {
    audio: `/songs/${song}/${file}.mp3`,
    active: `/songs/${song}/images/${file}-active.png`,
    idle: `/songs/${song}/images/${file}-idle.png`
  };
};

const people = {
  jonny: {
    name: "Jonny Thaw",
    link: "https://twitter.com/jthaw.me"
  }
};

const tracks = [
  {
    number: 1,
    title: "Re-Do",
    info: "",
    download:
      "https://drive.google.com/drive/folders/15tvBOSqupfj7sCRn64DS4Ov9DU-keplr?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=6rgbYAZeZJI",
      image: "redo.jpg"
    }
  },
  {
    number: 2,
    title: "Tears Over Beers",
    info: "",
    download:
      "https://drive.google.com/drive/folders/1iddcM99QLT2KFvfdWyBWTWhYFLbnocqJ?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=kxViktJCHlg",
      image: "tearsoverbeers.jpg"
    }
  },
  {
    number: 3,
    title: "The Weekend",
    info: "",
    download:
      "https://drive.google.com/drive/folders/1TmirSBdtkbayBV4fGLtr3h-2mhH_m6oa?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=cIy2wyEV0qc",
      image: "theweekend.jpg"
    }
  },
  {
    number: 4,
    title: "@chl03k",
    info: "",
    download:
      "https://drive.google.com/drive/folders/12Z5aSZ_Cy9B6MmtrZXtP_DcTpc4LocqV?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=mQsV5-O5ZtI",
      image: "chl03k.jpg"
    }
  },
  {
    number: 5,
    title: "Hours Outside in the Snow",
    info: "",
    download:
      "https://drive.google.com/drive/folders/19Ay68TJ97YXN93RFDQC8i2Nm-scdpEN-?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=OWFvYXmlfmQ",
      image: "hoursoutside.jpg"
    }
  },
  {
    number: 6,
    title: "I Think You Were In My Profile Picture Once",
    info: "",
    download:
      "https://drive.google.com/drive/folders/1bOn2SOTk5mRsk5Z_XoHKunPw_LT3k2Jm?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=QpYykHrG3LI",
      image: "profilepicture.jpg"
    }
  },
  {
    number: 7,
    title: "Re-Done",
    info: "",
    download:
      "https://drive.google.com/drive/folders/1Nw2OaRgiGY6xHx7oEdhrWMwDtrmsiKTR?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=vwVMhvH4KKI",
      image: "redone.jpg"
    }
  },
  {
    number: 8,
    title: "Cooke",
    info: "115bpm – Tuned 1/2 step down - G/C/Em",
    download:
      "https://drive.google.com/drive/folders/1OEGAM9hzSUwv316g6c406JpgK668JisP?usp=sharing",
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
    ],
    collaborators: [people.jonny]
  },
  {
    number: 9,
    title: "See Ya, Sucker",
    info: "",
    download:
      "https://drive.google.com/drive/folders/1cyu0OUVe-N5jvTEbfVZ2i7G6E8H-kfDx?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=mhFBV1Nmq2c",
      image: "seeyasucker.jpg"
    }
  },
  {
    number: 10,
    title: "Look Out",
    info: "",
    download:
      "https://drive.google.com/drive/folders/1h4pNjBYKOytUybm1iaiZQWj0DTzVYfTH?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=EpBS17K-KPQ",
      image: "lookout.jpg"
    }
  },
  {
    number: 11,
    title: "Play Ball!",
    info: "",
    download:
      "https://drive.google.com/drive/folders/1H9XDfLdIXEFTXRD8F1Nf3WgqhF1IcR00?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=zyxf4TqUCFk",
      image: "playball.jpg"
    }
  },
  {
    number: 12,
    title: "Coals",
    info: "110bpm – Capo on 3rd (if you want)",
    download:
      "https://drive.google.com/drive/folders/1OtCHNfUhQfHPpoar3UjzOIgFUGYc4uqN?usp=sharing",
    song: {
      link: "https://www.youtube.com/watch?v=M4wXqWEaU94",
      image: "coals.gif"
    },
    parts: [
      {
        title: "Metronome",
        file: getFile("12coals", "metronome"),
        muted: true
      },
      {
        title: "Guitar 1",
        file: getFile("12coals", "guitar1"),
        muted: false
      }
    ],
    collaborators: [people.jonny]
  }
];

export default tracks;
