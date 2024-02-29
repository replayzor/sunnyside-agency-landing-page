import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {
	const [handleClick, setHandleClick] = useState(false);
	const desktop = useMediaQuery({ query: "(min-width: 768px" });

	const desktopNav = (
		<div>
			<ul className="flex items-center text-sm text-white gap-9 font-barlow">
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<button className="text-black bg-white py-[10px] px-5 rounded-full uppercase text-xs hover:text-white hover:bg-opacity-50 transition">
						Contact
					</button>
				</li>
			</ul>
		</div>
	);

	const mobileNav = (
		<div
			className={`absolute w-[90%] mx-[5%] right-0 top-20 font-barlow overflow-hidden transition-all text-dg-blue ${
				handleClick ? "h-[337.68px]" : "h-0"
			}`}
		>
			<ul className="flex flex-col items-center p-10 text-xl bg-white gap-7 mt-7">
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<button className="bg-yellow-400 text-vddes-blue uppercase px-7 py-[12px] text-[15px] font-fraunces rounded-full">
						Contact
					</button>
				</li>
			</ul>
		</div>
	);

	return (
		<div className="md:bg-header-desktop bg-contain bg-no-repeat w-[100%] h-0 md:pb-[55.56%] bg-header-mobile pb-[143.47%]">
			<nav className="flex items-center justify-between p-5 py-5 mb-12">
				<img className="md:h-5 mobile:h-6" src="/images/logo.svg" />
				<div>
					{desktop ? (
						desktopNav
					) : (
						<input
							className="py-3"
							type="image"
							onClick={() => {
								setHandleClick(!handleClick);
							}}
							src="/images/icon-hamburger.svg"
						/>
					)}
				</div>
			</nav>
			<div className="flex flex-col items-center justify-center uppercase">
				<h1 className="md:text-[2rem] mb-[3rem] font-black text-white tracking-[0.4rem] font-fraunces text-center leading-tight mobile:text-[40px]">
					We Are Creatives
				</h1>
				<img className="mobile:w-10 md:w-6" src="/images/icon-arrow-down.svg" />
			</div>
			{mobileNav}
		</div>
	);
};

export default Header;
