import { Outlet, Link } from "react-router-dom";
import "./HomePage.css";

interface TechBadgeProps {
  alt: string;
  path: string;
  label: string;
}

function TechBadge(props: TechBadgeProps) {
  const { alt, path, label } = props;

  return (
    <div className='badge'>
      <div className='badge-icon-context'>
        <img alt={alt} src={path} />
      </div>
      <p className='badge-label'>{label}</p>
    </div>
  );
}

interface LinkCardProps {
  path: string;
  alt: string;
  src: string;
  title: string;
  subtitle: string;
}

function LinkCard(props: LinkCardProps) {
  const { path, title, subtitle, src, alt } = props;

  return (
    <Link to={path}>
      <div className='card'>
        <div className='card-media'>
          <img className='text-white h-full w-full' src={src} alt={alt} />
        </div>
        <div className='card-content'>
          <p className='card-title'>{title}</p>
          <p className='card-subtitle'>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function HomePage() {
  return (
    <div className='h-screen w-screen flex flex-row'>
      <div className='flex w-full items-center justify-center left-side'>
        <div className='flex flex-col text-white'>
          <p className='text-5xl mb-8 neon'>CodeZDeco</p>
          <p className='max-w-md mb-4'>
            This repository is React-typescript template made by CozDe in the
            purpose of shortening the way initial project structure
          </p>
          <p className='max-w-md mb-4'>We are using some trending techs:</p>
          <div className='flex gap-2 mb-4'>
            <TechBadge
              alt='ReactJS'
              path={`${process.env.PUBLIC_URL}/icons/react.png`}
              label='ReactJS'
            />
            <TechBadge
              alt='Redux'
              path={`${process.env.PUBLIC_URL}/icons/redux.svg`}
              label='Redux'
            />
            <TechBadge
              alt='Tailwind'
              path={`${process.env.PUBLIC_URL}/icons/tailwind-css.png`}
              label='Tailwind'
            />
            <TechBadge
              alt='Tailwind'
              path={`${process.env.PUBLIC_URL}/icons/router-dom-v6.svg`}
              label='Router Dom v6'
            />
          </div>
          <p className='max-w-md mb-4'>Check out some our examples:</p>
          <div className='flex flex-col gap-4 mb-4'>
            <LinkCard
              src='https://thumbs.dreamstime.com/b/clipboard-checklist-icon-symbol-web-site-app-design-clipboard-checklist-icon-symbol-web-site-app-design-179943343.jpg'
              path='todo'
              alt='TODO'
              title='TODO List'
              subtitle='Example of making simple todo list using plain react hooks'
            />
            <LinkCard
              src='https://static.thenounproject.com/png/644186-200.png'
              path='snake'
              alt='Snake'
              title='Snake Game'
              subtitle='Simple snake game using ReactJS'
            />
          </div>
        </div>
      </div>
      {/* <div className='grow'>
        <Outlet />
      </div> */}
    </div>
  );
}

export default HomePage;
