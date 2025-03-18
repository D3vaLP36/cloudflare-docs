import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MapImg from "~/assets/network-map.png";

const tabs = ["Overview", "Connect & Protect", "Build"];

const connectCards = [
	{
		label: "For websites & web apps",
		description: "DNS, CDN, L7 DDoS protection, WAF, and more.",
		cta: {
			primary: {
				label: "Proxy your domain",
				href: "/fundamentals/setup/manage-domains/connect-your-domain/",
			},
			secondary: {
				label: "All application services",
				href: "/products/?product-group=Analytics%2CApplication+performance%2CApplication+security%2CCloudflare+essentials",
			},
		},
	},
	{
		label: "For internal networking & Zero Trust security",
		description: "Access, Gateway, Tunnels, CASB, and more.",
		cta: {
			primary: {
				label: "Set up Zero Trust",
				href: "/cloudflare-one/setup/",
			},
			secondary: {
				label: "All Zero Trust services",
				href: "/products/?product-group=Cloudflare+One",
			},
		},
	},
	{
		label: "For public, private, and hybrid networks",
		description: "L3 DDoS protection, firewall, interconnects, and more.",
		cta: {
			primary: {
				label: "Onramp your network",
				href: "/TODO/",
			},
			secondary: {
				label: "All network services",
				href: "/products/?product-group=Network+security",
			},
		},
	},
	{
		label: "For personal devices and home networks",
		description: "1.1.1.1, WARP client, and Radar.",
		cta: {
			primary: {
				label: "Download WARP",
				href: "/warp-client/get-started/",
			},
			secondary: {
				label: "All consumer services",
				href: "/products/?product-group=Consumer+services",
			},
		},
	},
] as const;

function OverviewPanel() {
	return (
		<div className="flex items-center justify-center gap-6 p-6">
			<img
				className="hidden h-auto w-1/2 md:block"
				src={MapImg.src}
				width={MapImg.width}
				height={MapImg.height}
			/>
			<div>
				<div>
					<p className="text-xl font-semibold">What is Cloudflare?</p>
					<p>
						Connect to or build on top of Cloudflare’s global network to speed
						up and protect your apps, employees, and networks.
					</p>
				</div>
				<div className="flex gap-4">
					<a
						href="https://dash.cloudflare.com/login"
						className="text-black no-underline"
					>
						Sign up
					</a>
					<a href="/fundamentals/" className="text-black no-underline">
						Learn more
					</a>
				</div>
			</div>
		</div>
	);
}

function ConnectPanel() {
	return (
		<div className="flex flex-col gap-4 p-6">
			<p className="text-center text-xl font-semibold">
				Secure and accelerate anything connected to Cloudflare.
			</p>
			<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
				{connectCards.map((card) => (
					<div
						key={card.label}
						className="flex flex-col items-center gap-4 rounded border p-6 shadow-sm"
					>
						<div className="text-center">
							<p className="font-semibold">{card.label}</p>
							<p>{card.description}</p>
						</div>
						<a
							href={card.cta.primary.href}
							className="mt-auto block min-w-16 text-nowrap rounded border border-cl1-brand-orange px-6 text-black no-underline"
						>
							{card.cta.primary.label}
						</a>
						<a
							href={card.cta.secondary.href}
							className="block min-w-16 text-nowrap px-6 text-black no-underline"
						>
							{card.cta.secondary.label}
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

function BuildPanel() {
	return <p>BuildPanel</p>;
}

const panels = [OverviewPanel, ConnectPanel, BuildPanel];

export default function OfferingsTabs() {
	return (
		<div className="flex flex-col items-center justify-center gap-10">
			<h2>Explore Cloudflare offerings</h2>
			<Tabs className="not-content w-full shadow-md">
				<TabList className="-mb-[1px] grid list-none grid-cols-3 gap-2 pl-0 text-center">
					{tabs.map((tab, index) => (
						<Tab
							key={index}
							className="cursor-pointer select-none rounded-t border-l border-r border-t bg-cl1-gray-9 p-4 font-semibold text-cl1-gray-4"
							selectedClassName="!bg-white !text-black"
						>
							{tab}
						</Tab>
					))}
				</TabList>

				{panels.map((Panel) => (
					<TabPanel>
						<div className="border">
							<Panel />
						</div>
					</TabPanel>
				))}
			</Tabs>
		</div>
	);
}
