import Link from 'next/link'
import { Links } from './Links'
import { SearchBar } from './SearchBar'
import { IconAndProfile } from './Icon&Profile'
import { getSession } from '../utils/CacheSession'
import { MenuMobile } from './MenuMobile'

export const Headers = async () => {
  const session = await getSession()

  return <header className="h-[85px] bg-[#181616] max-xl:px-4">
    <nav className="h-full max-w-[1500px] mx-auto flex items-center justify-between">
        <Link href="/">
            <h2 className="text-xl font-bold text-[#E0FFE0] uppercase">KevinSocial</h2>
        </Link>

        <Links />
        <SearchBar />
        <IconAndProfile session={session} />

        {/* menu mobile */}
        <MenuMobile />
    </nav>
  </header>
}