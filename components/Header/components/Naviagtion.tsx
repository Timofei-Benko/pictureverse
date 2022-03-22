import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation = () => {
  const { pathname } = useRouter();

  if (pathname === '/login' || pathname === '/register') return null;

  return (
    <nav className="navigation">
      <ul className="list">
        <li className="list-item">
          <Link href='/feed'>
            <a className="nav-item">
              Home
            </a>
          </Link>
        </li>
        <li className="list-item">
          <Link href="/profile">
            <a className="nav-item">
              Profile
            </a>
          </Link>
        </li>
        <li className="list-item">
          <Link href="/settings">
            <a className="nav-item">
              Settings
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
