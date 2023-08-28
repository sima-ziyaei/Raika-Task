import './App.css';
import AppRoutes from './routes';

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
