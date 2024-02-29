function Images() {
	return (
		<>
			<section className="grid grid-cols-2 pt-16">
				<img
					src="/images/mobile/image-gallery-milkbottles.jpg"
					alt=""
					className="md:hidden"
				/>
				<img
					src="/images/mobile/image-gallery-orange.jpg"
					alt=""
					className="md:hidden"
				/>
				<img
					src="/images/mobile/image-gallery-cone.jpg"
					alt=""
					className="md:hidden"
				/>
				<img
					src="/images/mobile/image-gallery-sugar-cubes.jpg"
					alt=""
					className="md:hidden"
				/>
			</section>
			{/* Images Desktop */}
			<section className="flex items-center justify-center">
				<img
					src="/images/desktop/image-gallery-milkbottles.jpg"
					alt=""
					className="hidden md:block h-[550px] w-full"
				/>
				<img
					src="/images/desktop/image-gallery-orange.jpg"
					alt=""
					className="hidden w-full h-[550px] md:block"
				/>
				<img
					src="/images/desktop/image-gallery-cone.jpg"
					alt=""
					className="hidden md:block h-[550px] w-full"
				/>
				<img
					src="/images/desktop/image-gallery-sugarcubes.jpg"
					alt=""
					className="hidden md:block h-[550px] w-full"
				/>
			</section>
		</>
	);
}
export default Images;
