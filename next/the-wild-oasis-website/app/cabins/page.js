import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Filter from "../_components/Filter";

//this couldn't be computed, needs to be a value
//export const revalidate = 0; every time the data will be revalidated
//export const revalidate = 3600; when a page uses params as props, the page becomes dynamic renderer page

export const metadata = {
	title: "Cabins",
};

export default function Page({ searchParams }) {
	const filter = searchParams?.capacity ?? "all";

	return (
		<div>
			<h1 className="text-4xl mb-5 text-accent-400 font-medium">
				Our Luxury Cabins
			</h1>
			<p className="text-primary-200 text-lg mb-10">
				Cozy yet luxurious cabins, located right in the heart of the Italian
				Dolomites. Imagine waking up to beautiful mountain views, spending your
				days exploring the dark forests around, or just relaxing in your private
				hot tub under the stars. Enjoy nature&apos;s beauty in your own little
				home away from home. The perfect spot for a peaceful, calm vacation.
				Welcome to paradise.
			</p>
			<div className="flex justify-end mb-8">
				<Filter />
			</div>
			<Suspense fallback={<Spinner />}>
				<CabinList filter={filter} />
			</Suspense>
		</div>
	);
}
