import Link from 'next/link'
import { Links } from './Links'
import { SearchBar } from './SearchBar'

export const Headers = () => {
  return <header className="h-[85px] shadow-md bg-[#181616]">
    <nav className="h-full max-w-[1500px] mx-auto flex items-center justify-between">
        <Link href="/">
            <h2 className="text-xl font-bold text-purple-400 uppercase">KevinSocial</h2>
        </Link>

        <Links />
        <SearchBar />
    </nav>
  </header>
}