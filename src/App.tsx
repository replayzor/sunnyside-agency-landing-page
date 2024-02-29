import Cards from "./components/Cards";
import ClientTestimonials from "./components/ClientTestimonials";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Images from "./components/Images";

function App() {
	return (
		<main className="">
			{/* Header */}
			<Header />
			{/* Cards */}
			<Cards />
			<h2 className="text-[16px] md:pt-40 font-bold tracking-[0.2rem] text-center uppercase pt-14 pb-10 font-fraunces text-neutral-grayishBlue">
				Client testimonials
			</h2>
			<ClientTestimonials />
			{/* Images Mobile */}
			<Images />
			{/* Footer */}
			<Footer />
		</main>
	);
}

export default App;
