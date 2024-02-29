const clientTestimonials = [
	{
		id: 1,
		name: "Emily R.",
		title: "Marketing Director",
		image: "/images/image-emily.jpg",
		quote:
			"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
	},
	{
		id: 2,
		name: "Thomas S.",
		title: "Chief Operating Officer",
		image: "/images/image-thomas.jpg",
		quote:
			"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
	},
	{
		id: 3,
		name: "Jennie F.",
		title: "Business Owner",
		image: "/images/image-jennie.jpg",
		quote:
			"We needed the best possible care but Sunnyside made it happen without any extra costs.",
	},
];

function ClientTestimonials() {
	return (
		<section className="md:flex md:pb-20 md:px-24 md:gap-36 md:flex-row">
			{clientTestimonials.map((client) => {
				const { id, name, title, image, quote } = client;
				return (
					<div key={id} className="flex flex-col items-center justify-center">
						<img
							src={image}
							alt={name}
							className="w-[75px] rounded-full mt-7"
						/>
						<p className="text-center leading-8 font-barlow text-[18px] px-4 py-8 text-neutral-veryDarkGrayishBlue">
							{quote}
						</p>
						<h3 className="pb-2 text-lg font-black font-fraunces text-neutral-veryDarkDesaturatedBlue">
							{name}
						</h3>
						<p className="pb-6 font-semibold text-neutral-grayishBlue">
							{title}
						</p>
					</div>
				);
			})}
		</section>
	);
}
export default ClientTestimonials;
