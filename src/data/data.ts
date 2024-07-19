import GiGamepad from "../../public/Assets/Gamepad.svg";
import DaGamepad from "../../public/Assets/Gamepad-dark.svg";
import SeGamepad from "../../public/Assets/Gamepad-sec.svg";
import FaMedal from "../../public/Assets/Leaderboard.svg";
import FaCoins from "../../public/Assets/Token.svg"
import IoVideocam from "../../public/Assets/Video.svg";
import MdGroups from "../../public/Assets/Community.svg";
import Image from "../../public/Assets/Bet.svg"
import Avatar from "../../public/Assets/VALORANT Fan Art, Rui-Rou Teo 1.png"
import Play from "../../public/Assets/Play.svg"
import User from "../../public/Assets/User.svg"
import Tournament from "../../public/Assets/image-2.png"
import Calendar from "../../public/Assets/Calendar.svg"
import Up from "../../public/Assets/Up.svg"
import Down from "../../public/Assets/Down.svg"
import Dash from "../../public/Assets/Dash.svg"

export const sideNav = [
  {
    path: '/tournaments',
    name: 'Tournament',
    icon: SeGamepad
  },
  {
    path: '',
    name: 'Leaderboards',
    icon: FaMedal
  },
  {
    path: '',
    name: 'Token shop',
    icon: FaCoins
  },
  {
    path: '',
    name: 'Live betting',
    icon: Image
  },
  {
    path: '',
    name: 'Content locker',
    icon: IoVideocam
  },
  {
    path: '',
    name: 'Community',
    icon: MdGroups
  }
]

export const cardData = [
  {
    hasButton: true,
    title: "Setup your profile",
    desc: "Complete your information to get access to tournaments and other premium features",
    image: Avatar,
    icon: User,
    text: "Complete Profile",
    style: "col-span-2"
  },
  {
    hasButton: false,
    title: "Continue playing",
    desc: "Start or resume tournaments you have registered for",
    image: Avatar,
    icon: Play,
    text: "Continue playing"
  },
  {
    hasButton: false,
    title: "Quick match",
    desc: "Create a tournament and invite friends to play",
    image: Avatar,
    icon: Play,
    text: "Let's go"
  },
]

export const listings = [
  {
    image: Tournament,
    title: "Call of duty",
    date: "10 Feb 2023",
    mode: "Free-to-play",
    vs: "4v4",
    time: "10/48",
    prize: "N10,000",
    calendar: Calendar,
    btns: [
      {
        text: "Join Tournament",
        icon: DaGamepad,
        style: "bg-[#8BC72F] text-[#0A0A0A] w-full"
      },
      {
        text: "View Details",
        icon: GiGamepad,
        style: "border border-[#4A4A4A] text-white w-full"
      }
    ]
  },
  {
    image: Tournament,
    title: "Call of duty",
    date: "10 Feb 2023",
    mode: "Free-to-play",
    vs: "4v4",
    time: "10/48",
    prize: "N10,000",
    calendar: Calendar,
    btns: [
      {
        text: "Join Tournament",
        icon: DaGamepad,
        style: "bg-[#8BC72F] text-[#0A0A0A] w-full"
      },
      {
        text: "View Details",
        icon: GiGamepad,
        style: "border border-[#4A4A4A] text-white w-full"
      }
    ]
  },
  {
    image: Tournament,
    title: "Call of duty",
    date: "10 Feb 2023",
    mode: "Free-to-play",
    vs: "4v4",
    time: "10/48",
    prize: "N10,000",
    calendar: Calendar,
    btns: [
      {
        text: "Join Tournament",
        icon: DaGamepad,
        style: "bg-[#8BC72F] text-[#0A0A0A] w-full"
      },
      {
        text: "View Details",
        icon: GiGamepad,
        style: "border border-[#4A4A4A] text-white w-full"
      }
    ]
  },
  {
    image: Tournament,
    title: "Call of duty",
    date: "10 Feb 2023",
    mode: "Free-to-play",
    vs: "4v4",
    time: "10/48",
    prize: "N10,000",
    calendar: Calendar,
    btns: [
      {
        text: "Join Tournament",
        icon: DaGamepad,
        style: "bg-[#8BC72F] text-[#0A0A0A] w-full"
      },
      {
        text: "View Details",
        icon: GiGamepad,
        style: "border border-[#4A4A4A] text-white w-full"
      }
    ]
  },
  {
    image: Tournament,
    title: "Call of duty",
    date: "10 Feb 2023",
    mode: "Free-to-play",
    vs: "4v4",
    time: "10/48",
    prize: "N10,000",
    calendar: Calendar,
    btns: [
      {
        text: "Join Tournament",
        icon: DaGamepad,
        style: "bg-[#8BC72F] text-[#0A0A0A] w-full"
      },
      {
        text: "View Details",
        icon: GiGamepad,
        style: "border border-[#4A4A4A] text-white w-full"
      }
    ]
  },
  {
    image: Tournament,
    title: "Call of duty",
    date: "10 Feb 2023",
    mode: "Free-to-play",
    vs: "4v4",
    time: "10/48",
    prize: "N10,000",
    calendar: Calendar,
    btns: [
      {
        text: "Join Tournament",
        icon: DaGamepad,
        style: "bg-[#8BC72F] text-[#0A0A0A] w-full"
      },
      {
        text: "View Details",
        icon: GiGamepad,
        style: "border border-[#4A4A4A] text-white w-full"
      }
    ]
  },
]

export const tabs = [
  {
    name: 'Leaderboards',
    key: 'Leaderboards',
  },
  {
    name: 'Fixtures',
    key: 'Fixtures',
  },
]

export const leaderboards = [
  {
    icon: Up,
    placement: 1,
    player: 'Adebayo Olaleye',
    games: 20,
    won: 20,
    losses: 0,
    wlRatio: 100,
    points: 49
  },
  {
    icon: Down,
    placement: 2,
    player: 'iBROMOVIC109',
    games: 20,
    won: 19,
    losses: 1,
    wlRatio: 98,
    points: 47
  },
  {
    icon: Dash,
    placement: 3,
    player: 'Drillz',
    games: 20,
    won: 17,
    losses: 3,
    wlRatio: 92,
    points: 46
  },
  {
    icon: Up,
    placement: 4,
    player: 'Bigbadderwolf',
    games: 20,
    won: 12,
    losses: 8,
    wlRatio: 55,
    points: 39
  },
  {
    icon: Up,
    placement: 5,
    player: 'Pinky',
    games: 20,
    won: 10,
    losses: 6,
    wlRatio: 50,
    points: 34
  },
  {
    icon: Down,
    placement: 6,
    player: 'demooflag',
    games: 22,
    won: 8,
    losses: 14,
    wlRatio: 48,
    points: 30
  },
]