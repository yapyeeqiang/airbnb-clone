function MediumCard({ img, title }) {
	return (
		<div className='cursor-pointer hover:scale-105 transition-all duration-300 ease-out'>
			<div className='h-80 w-80'>
				<img className='rounded-xl' src={img} />
			</div>
			<h3 className='text-2xl mt-3'>{title}</h3>
		</div>
	);
}

export default MediumCard;
