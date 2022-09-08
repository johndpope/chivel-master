import { useUser } from '@/utils/contexts/useUser';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className='flex items-center justify-between max-w-4xl px-5 py-4 mx-auto text-gray-300 lg:px-0'>
      <Logo />
      <ul className='flex items-center justify-between space-x-10'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Showcase</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Support</a>
          </Link>
        </li>
        <li>
          {!user ? (
            <Link href='/auth/login'>
              <a>Login</a>
            </Link>
          ) : (
            <Link href='/dashboard'>
              <a>Dashboard</a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
