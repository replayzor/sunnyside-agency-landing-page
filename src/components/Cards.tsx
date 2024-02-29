function Cards() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2">
			<img
				src="/images/mobile/image-transform.jpg"
				alt=""
				className="w-full bg-contain"
			/>
			<div className="md:flex md:flex-col md:-order-1 md:px-44 md:items-start md:justify-center">
				<h2 className="px-10 md:px-0 md:text-left pt-16 leading-10 pb-6 text-[32px] font-black text-center md:w-[70%] text-neutral-veryDarkDesaturatedBlue font-fraunces">
					Transform your brand
				</h2>
				<p className="px-5 md:px-0 md:text-left pb-8 text-[17px] leading-[30px] font-bold text-center md:w-[78%] text-neutral-darkGrayishBlue">
					We are a full-service creative agency specializing in helping brands
					grow fast. Engage your clients through compelling visuals that do most
					of the marketing for you.
				</p>
				<button className="flex items-center mx-auto font-black underline uppercase hover:decoration-primary-yellow md:mx-0 font-fraunces text-neutral-veryDarkDesaturatedBlue underline-offset-1 decoration-4 decoration-yellow-100">
					Learn more
				</button>
			</div>
			<img
				src="/images/mobile/image-stand-out.jpg"
				alt=""
				className="w-full pt-[60px] md:pt-0 bg-contain"
			/>
			<div className="md:flex md:flex-col md:px-44 md:items-start md:justify-center">
				<h2 className="px-10 md:px-0 md:text-left pt-16 leading-10 pb-6 text-[32px] font-black text-center md:w-[90%] text-neutral-veryDarkDesaturatedBlue font-fraunces">
					Stand out to the right audience
				</h2>
				<p className="px-5 md:px-0 md:text-left pb-8 text-[17px] leading-[30px] font-bold text-center md:w-[95%] text-neutral-darkGrayishBlue">
					Using a collaborative formula of designers, researchers,
					photographers, videographers, and copywriters, we’ll build and extend
					your brand in digital places.
				</p>
				<button className="flex items-center mx-auto font-black underline uppercase pb-14 hover:decoration-primary-softRed md:mx-0 font-fraunces text-neutral-veryDarkDesaturatedBlue underline-offset-1 decoration-4 decoration-red-200">
					Learn more
				</button>
			</div>
			<div className="bg-[url('/images/mobile/image-graphic-design.jpg')] md:bg-[url('/images/desktop/image-graphic-design.jpg')] bg-cover h-[600px] bg-no-repeat">
				<h2 className="pt-[410px] font-black text-primary-darkDesaturatedCyan text-center font-fraunces text-[28px]">
					Graphic design
				</h2>
				<p className="text-center px-4 md:w-[40%] md:mx-auto text-primary-darkDesaturatedCyan font-barlow text-[18px] pt-4">
					Great design makes you memorable. We deliver artwork that underscores
					your brand message and captures potential clients’ attention.
				</p>
			</div>
			<div className="bg-[url('/images/mobile/image-photography.jpg')] md:bg-[url('/images/desktop/image-photography.jpg')] bg-cover h-[600px] bg-no-repeat">
				<h2 className="pt-[410px] font-black text-primary-darkBlue text-center font-fraunces text-[28px]">
					Photography
				</h2>
				<p className="text-center md:w-[40%] md:mx-auto text-primary-darkBlue font-barlow text-[18px] pt-4">
					Increase your credibility by getting the most stunning, high-quality
					photos that improve your business image.
				</p>
			</div>
		</section>
	);
}
export default Cards;
