import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SPUDIN'S GAMELIST</h3>
            <p className="text-gray-400 mb-4">
              Your community-driven destination to track upcoming games, share ratings, and discover new favorites.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <p className="text-gray-400 mb-2">
              You can share your thoughts with us and make our project better.
            </p>
            <a href="mailto:contact@spudingamelist.com" className="text-red-500 hover:text-red-400">
              contact@spudingamelist.com
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Spudin's GameList</p>
          <p className="mt-1">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
} 