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
  return <div className='flex flex-row h-full'></div>;
}

export default HomePage;
