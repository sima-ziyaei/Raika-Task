import './App.css';
import AppRoutes from './routes';

export const gameLists = [
  {
    image: '/assets/images/Rectangle 7.png',
    mainImage: null,
    title: 'RainbowX S',
    id: 1
  },
  {
    image: '/assets/images/Rectangle 6.png',
    mainImage: '/assets/images/Left.png',
    title: 'Spiderman 2',
    id: 2
  },
  {
    image: '/assets/images/Rectangle 5.png',
    mainImage: null,
    title: 'LEAGUE OF LEGENDS',
    id: 3
  },
  {
    image: '/assets/images/Rectangle 4.png',
    mainImage: null,
    title: 'Fortnite',
    id: 4
  },
  {
    image: '/assets/images/Rectangle 12.png',
    mainImage: null,
    title: 'Cyberpunk 2077',
    id: 5
  },
  {
    image: '/assets/images/Rectangle 11.png',
    mainImage: null,
    title: 'APEX',
    id: 6
  },
  {
    image: '/assets/images/Hover.png',
    mainImage: '/assets/images/LeftImage.png',
    title: 'Cyberpunk 2077',
    id: 7
  },
  {
    image: '/assets/images/Rectangle 9.png',
    mainImage: null,
    title: 'RED DEAD REDEMPTION 2',
    id: 8
  },
  {
    image: '/assets/images/Rectangle 8.png',
    mainImage: null,
    title: 'Grand theft auto 5',
    id: 9
  },
  {
    image: '/assets/images/assassins.png',
    mainImage: null,
    title: 'Assassins CREED',
    id: 10
  },
];

function App() {

  return (
    <>
      <div className='bg-purple z-0 blur-[100px] w-[920px] h-[420px] rounded-b-full absolute left-0 top-0 opacity-[.15] '></div>
      <div className='bg-purple z-0 blur-[200px] w-[400px] h-[400px] rounded-tl-full absolute right-0 bottom-0 opacity-20'> </div>
      <AppRoutes />
    </>
  )
}

export default App
