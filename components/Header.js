import Image from 'next/image';
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
} from '@heroicons/react/solid';

function Header() {
	return (
		<header className='sticky top-0 z-50 shadow-md p-5 bg-white grid grid-cols-3 md:px-10'>
			{/* left */}
			<div className='relative h-10 my-auto'>
				<Image
					src='https://links.papareact.com/qd3'
					layout='fill'
					objectFit='contain'
					objectPosition='left'
				/>
			</div>
			{/* middle */}
			<div className='flex items-center md:border-2 rounded-full md:shadow-sm py-2'>
				<input
					className='text-gray-600 placeholder-gray-400 outline-none pl-5 flex-grow bg-transparent'
					type='text'
					placeholder='Start your search'
				/>
				<SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>
			{/* right */}
			<div className='flex justify-end items-center text-gray-500 space-x-4'>
				<p className='hidden lg:inline'>Become a host</p>
				<GlobeAltIcon className='h-6 cursor-pointer' />

				<div className='flex space-x-2 border-2 rounded-full p-2'>
					<MenuIcon className='h-6 cursor-pointer' />
					<UserCircleIcon className='h-6 cursor-pointer' />
				</div>
			</div>
		</header>
	);
}

export default Header;
