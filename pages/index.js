import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
	return (
		<div>
			<Head>
				<title>Airbnb Clone</title>
			</Head>

			{/* Header */}
			<Header />

			{/* Banner */}
			<Banner />

			{/* Main */}
			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				{/* Small Cards */}
				<section className='pt-6 sm:pt-8 md:pt-10 lg:pt-20'>
					<h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{exploreData?.map(({ img, distance, location }, index) => (
							<SmallCard
								key={index}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>

				{/* Medium Cards */}
				<section>
					<h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
					<div className='flex p-3 space-x-3 overflow-scroll scrollbar-hide -ml-3'>
						{cardsData?.map(({ img, title }, index) => (
							<MediumCard key={index} img={img} title={title} />
						))}
					</div>
				</section>

				{/* Large Card */}
				<LargeCard />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch('http://localhost:3000/api/exploreData').then(
		(res) => res.json()
	);

	const cardsData = await fetch('http://localhost:3000/api/cardsData').then(
		(res) => res.json()
	);

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
