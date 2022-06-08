import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className='h-screen w-screen flex flex-row'>
      <div className='w-24 bg-zinc-900'></div>
      <div className='grow'>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
