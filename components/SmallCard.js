function SmallCard({ img, location, distance }) {
	return (
		<div className='flex items-center m-2 mt-5 space-x-4 hover:bg-gray-100 hover:scale-105 rounded-xl cursor-pointer transition transform duration-200 ease-out border border-gray-50 shadow-sm'>
			<div>
				<img className='rounded-tl-lg rounded-bl-lg w-16 h-16' src={img} />
			</div>
			<div>
				<h2>{location}</h2>
				<h3 className='text-gray-500'>{distance}</h3>
			</div>
		</div>
	);
}

export default SmallCard;
