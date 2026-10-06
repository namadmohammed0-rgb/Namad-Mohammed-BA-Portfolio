import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Download, Mail, MapPin, Moon, Phone, Sun } from "lucide-react";
import SapDocumentWindow from "@/components/sap/SapDocumentWindow";

const projects = [
	{
		no: "01",
		title: "SAP ↔ Unicommerce",
		text: "Connected SAP ERP workflows with a third-party commerce platform through integration, data mapping, and process coordination.",
		tags: ["SAP", "Integration", "Data mapping", "Third-party integration"],
	},
	{
		no: "02",
		title: "SAP + BEAS Manufacturing",
		text: "Supported manufacturing operations with BEAS production flows, inventory visibility, and reliable issue and receipt transactions.",
		tags: ["SAP B1", "BEAS", "Manufacturing", "ERP workflows"],
	},
	{
		no: "03",
		title: "WMS / FEFO / Picklist",
		text: "Improved warehouse-facing processes with clearer item movement, picking logic, and operational reporting.",
		tags: ["WMS", "FEFO", "Picklist", "Warehouse operations"],
	},
	{
		no: "04",
		title: "SAP Web / Mobile Portal",
		text: "Built SAP-integrated portals and mobile workflows that made Sales, Purchase, Inventory, and Expense operations easier to access.",
		tags: ["Portals", "Mobile", "Workflow", "Business process support"],
	},
	{
		no: "05",
		title: "SQL / HANA Reporting",
		text: "Created stored procedures, validation logic, and reports that helped teams reach reliable operational insight faster.",
		tags: ["SQL", "HANA", "Reporting", "Data analysis"],
	},
	{
		no: "06",
		title: "E-Invoicing / Automation",
		text: "Implemented process automation and e-invoicing solutions to reduce manual work and accelerate Accounts Receivable processing.",
		tags: ["Automation", "E-invoicing", "AR", "Process improvement"],
	},
	{
		no: "07",
		title: "SAP ↔ Telegram Automation with n8n",
		text: "Personal project exploring automated SAP-to-Telegram integration with n8n for notifications, workflow triggers, and faster operational communication.",
		tags: ["n8n", "SAP", "Telegram", "Personal project"],
	},
];

const whatIDo = [
	"Business Analysis",
	"ERP / SAP",
	"System Integration",
	"REST APIs",
	"SQL / SAP HANA",
	"Automation",
	"Workflow Design",
	"Data Mapping",
	"Third-party Integration",
	"Process Improvement",
];
const businessAnalysis = [
	"Requirements Gathering",
	"Process Mapping",
	"Gap Analysis",
	"Functional Documentation",
	"UAT",
	"Defect Management",
	"Stakeholder Management",
	"Root Cause Analysis",
];
const technical = [
	"SAP ERP",
	"SAP Business One",
	"ERP Integration",
	"System Integration",
	"REST APIs",
	"API Integration",
	"Data Mapping",
	"JSON",
	"Webhooks",
	"Third-party Integration",
	"SQL",
	"SAP HANA",
	"SQL Stored Procedures",
	"Data Analysis",
	"Reporting",
	"Data Validation",
	"Workflow Automation",
	"Process Automation",
	"n8n",
	"API-driven Automation",
];
const experience = [
	{
		year: "2024 — Present",
		title: "Business Analyst Team Lead",
		company: "FieldNXT Pvt. Ltd",
		detail: "Leading ERP-integrated portals, workflow automation, BEAS manufacturing, SQL/HANA solutions, business analysis, and third-party integrations.",
		skills: ["Team leadership", "ERP integrations", "BEAS", "Automation"],
	},
	{
		year: "2023 — 2024",
		title: "SAP Business One Functional Consultant",
		company: "Indus Novature Softech Pvt. Ltd",
		detail: "Supported SAP B1 implementations, production reporting, process documentation, and user adoption.",
		skills: ["SAP B1", "Functional consulting", "UAT", "Documentation"],
	},
	{
		year: "2020 — 2022",
		title: "Financial Analyst",
		company: "CA Asha Zachariah & Co",
		detail: "Delivered reporting and analysis for 10+ clients, improved data validation, and supported audit and compliance work.",
		skills: ["Financial analysis", "Reporting", "Data validation", "Audit support"],
	},
	{
		year: "2015 — 2016",
		title: "Accountant / Audit Executive",
		company: "CA Alex Kuriakose & Co",
		detail: "Built a strong foundation in accounting operations, audit support, reconciliations, and financial controls.",
		skills: ["Accounting", "Reconciliation", "Financial controls", "Audit"],
	},
];

function Field({ label, value }: { label: string; value: string }) {
	return (
		<div className="sap-field">
			<span>{label}</span>
			<strong>{value}</strong>
		</div>
	);
}

const cvHref = "./Namad-Mohammed-Portfolio.pdf";

const stats = [
	{ code: "01", value: "10+", label: "Years across finance, ERP, and delivery" },
	{ code: "02", value: "30+", label: "Operational workflows mapped and improved" },
	{ code: "03", value: "15+", label: "ERP, automation, and reporting initiatives supported" },
	{ code: "04", value: "100%", label: "Focus on practical business outcomes" },
];

export default function Home() {
	const [heroPulse, setHeroPulse] = useState(0);
	const [liveClock, setLiveClock] = useState("00:00:00");

	useEffect(() => {
		const updateClock = () =>
			setLiveClock(
				new Intl.DateTimeFormat("en-GB", {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hour12: false,
				}).format(new Date())
			);
		updateClock();
		const timer = window.setInterval(updateClock, 1000);
		return () => window.clearInterval(timer);
	}, []);

	return (
		<div className="consulting-portfolio">
			<main id="top" className="sap-document-stack">
				<SapDocumentWindow
					title="Business & ERP Solutions"
					code={`01 / LIVE · ${liveClock}`}
					className="sap-hero-window"
				>
					<div className="sap-hero-layout">
						<div className="sap-hero-copy">
							<div className="sap-form-caption">
								STATUS: AVAILABLE · ROLE: ERP INTEGRATION &amp; BUSINESS ANALYST
							</div>
							<h1>
								Business &amp; ERP
								<br />
								<em key={heroPulse}>Solutions.</em>
							</h1>
							<p>
								Connecting business requirements, ERP systems, APIs, data, and
								automation to build practical solutions that reduce manual work and
								improve business processes.
							</p>
							<div className="sap-inline-meta">
								<span>
									<MapPin size={14} /> Trivandrum, Kerala
								</span>
								<span>
									<Mail size={14} /> namadmohammed0@gmail.com
								</span>
							</div>
							<div className="sap-data-strip">
								<span>STATUS: AVAILABLE</span>
								<span>ROLE: ERP INTEGRATION &amp; BUSINESS ANALYST</span>
								<span>
									BUILDING SYSTEMS · CONNECTING TEAMS · REDUCING FRICTION ·
								</span>
							</div>
							<div className="sap-action-row">
								<a
									className="sap-primary-button"
									href="#work"
									onClick={() => setHeroPulse((value) => value + 1)}
								>
									View Projects <ArrowUpRight size={14} />
								</a>
								<a
									className="sap-secondary-button"
									href={cvHref}
									download="Namad-Mohammed-Portfolio.pdf"
									target="_blank"
									rel="noreferrer"
								>
									<Download size={14} /> Download CV
								</a>
							</div>
						</div>
						<div className="sap-hero-badge">
							<div className="sap-badge-ring">
								<span>NM</span>
							</div>
							<small>ERP • BUSINESS ANALYSIS • INTEGRATION</small>
						</div>
					</div>
					<div className="sap-form-footer">
						<span>ACTIVE WORKSTREAM</span>
						<strong>
							Business need <em>→</em> system solution
						</strong>
						<small>Requirements · Mapping · Delivery</small>
					</div>
				</SapDocumentWindow>

				<SapDocumentWindow
					title="About Me"
					code="BP-0001 · VERIFIED"
					className="sap-about-window"
				>
					<div className="sap-section-intro">
						<div>
							<span className="sap-form-caption">System profile readout</span>
							<h2>
								Connecting business
								<br />
								<em>needs with systems.</em>
							</h2>
						</div>
						<div className="sap-identity-mark">
							<strong>NM</strong>
							<span>IDENTITY / 001</span>
						</div>
					</div>
					<p className="sap-window-copy">
						Business Analyst with experience across ERP integration, business
						process improvement, automation, reporting, SQL/HANA, APIs, and
						third-party system integration. I work between business requirements
						and technical delivery, translating operational needs into practical
						systems and integration solutions.
					</p>
					<div className="sap-field-grid">
						<Field label="NAME" value="Namad Mohammed" />
						<Field label="ROLE" value="ERP Integration &amp; Business Analyst" />
						<Field label="LOCATION" value="Trivandrum, Kerala / Remote" />
						<Field label="EXPERTISE" value="ERP · Integration · APIs · SQL/HANA · Automation" />
						<Field label="EXPERIENCE" value="10+ years across finance, ERP, and delivery" />
					</div>
				</SapDocumentWindow>

				<SapDocumentWindow
					title="Projects · Sales Order Register"
					code="SO-PORTFOLIO"
					className="sap-projects-window"
				>
					<div className="sap-window-heading">
						<div>
							<span className="sap-form-caption">Selected projects</span>
							<h2>
								Relevant work,
								<br />
								<em>clearly presented.</em>
							</h2>
						</div>
						<p>
							Selected experience across ERP, manufacturing, portals, reporting,
							integration, automation, and a personal n8n project.
						</p>
					</div>
					<div id="work" className="sap-sales-orders">
						{projects.map((project) => (
							<article className="sap-sales-order" key={project.no}>
								<div className="sap-order-top">
									<strong>PROJECT {project.no}</strong>
									<span>
										{project.no === "07"
											? "PERSONAL PROJECT"
											: "SELECTED EXPERIENCE"}
									</span>
								</div>
								<div className="sap-field-grid sap-order-fields">
									<Field label="PROJECT" value={project.title} />
									<Field label="MODULE" value={project.tags.join(" · ")} />
									<Field
										label="ROLE"
										value={
											project.no === "07"
												? "Business Analyst / Integration Consultant"
												: "Business Analyst / ERP Integration"
										}
									/>
									<Field
										label="CLIENT"
										value={
											project.no === "07"
												? "Personal project"
												: "Selected experience"
										}
									/>
									<Field label="STATUS" value="Selected" />
									<Field label="OUTCOME" value={project.text} />
								</div>
								<a className="sap-row-link" href="#contact">
									Discuss this capability{" "}
									<ArrowUpRight size={13} />
								</a>
							</article>
						))}
					</div>
				</SapDocumentWindow>

				<SapDocumentWindow
					title="Business Analysis · Matrix"
					code="BA-REGISTER"
					className="sap-analysis-window"
				>
					<div className="sap-window-heading">
						<div>
							<span className="sap-form-caption">Business analysis</span>
							<h2>
								From questions
								<br />
								<em>to action.</em>
							</h2>
						</div>
					</div>
					<div className="sap-table-wrap">
						<table className="sap-table">
							<thead>
								<tr>
									<th>No.</th>
									<th>Process / Method</th>
									<th>Delivery Area</th>
								</tr>
							</thead>
							<tbody>
								{businessAnalysis.map((item, index) => (
									<tr key={item}>
										<td>{String(index + 1).padStart(2, "0")}</td>
										<td>{item}</td>
										<td>Business Analysis</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</SapDocumentWindow>

				<SapDocumentWindow
					title="Skills · Capability Matrix"
					code="SK-REGISTER"
					className="sap-skills-window"
				>
					<div className="sap-window-heading">
						<div>
							<span className="sap-form-caption">Skills matrix</span>
							<h2>
								Working toolkit,
								<br />
								<em>mapped.</em>
							</h2>
						</div>
						<p>
							Technical, ERP, integration, and automation capabilities used across
							delivery.
						</p>
					</div>
					<div className="sap-table-wrap">
						<table className="sap-table sap-skills-table">
							<thead>
								<tr>
									<th>Category</th>
									<th>Capability / Tool</th>
									<th>Area</th>
								</tr>
							</thead>
							<tbody>
								{technical.map((item, index) => (
									<tr key={item}>
										<td>
											{index < 2
												? "ERP & Integration"
												: index < 5
												? "Data & APIs"
												: index < 10
												? "Automation & Integration"
												: index < 15
												? "Data & Reporting"
												: "Automation"}
										</td>
										<td>{item}</td>
										<td>{whatIDo[index % whatIDo.length]}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</SapDocumentWindow>

				<SapDocumentWindow
					title="System Metrics · KPI Register"
					code="KPI-0004"
					className="sap-stats-window"
				>
					<div className="sap-kpi-grid">
						{stats.map((stat) => (
							<div className="sap-kpi" key={stat.code}>
								<span>{stat.code}</span>
								<strong>{stat.value}</strong>
								<small>{stat.label}</small>
							</div>
						))}
					</div>
				</SapDocumentWindow>

				<SapDocumentWindow
					title="Experience · Journal Entry"
					code="JE-0004 · POSTED"
					className="sap-experience-window"
				>
					<div className="sap-window-heading">
						<div>
							<span className="sap-form-caption">
								Professional journey · present to past
							</span>
							<h2>
								Circuit <em>trace.</em>
							</h2>
						</div>
						<p>
							Each role adds a new layer to the system: analysis, integration,
							leadership, and dependable delivery.
						</p>
					</div>
					<div className="sap-table-wrap">
						<table className="sap-table sap-journal-table">
							<thead>
								<tr>
									<th>Period</th>
									<th>Journal Entry</th>
									<th>Company</th>
									<th>Description</th>
									<th>Skills</th>
								</tr>
							</thead>
							<tbody>
								{experience.map((item, index) => (
									<tr key={item.title}>
										<td>{item.year}</td>
										<td>
											<strong>
												{String(index + 1).padStart(2, "0")} · {item.title}
											</strong>
										</td>
										<td>{item.company}</td>
										<td>{item.detail}</td>
										<td>
											{item.skills.slice(0, 3).join(" · ")}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</SapDocumentWindow>

				<SapDocumentWindow
					title="Education · Master Data"
					code="ED-REGISTER"
					className="sap-education-window"
				>
					<div className="sap-field-grid">
						<Field
							label="MASTER'S IN BUSINESS MANAGEMENT"
							value="University of Siena, Italy · 2016–2019"
						/>
						<Field
							label="DETAILS"
							value="Studied international management, corporate valuation, business law, strategic management, and financial accounting."
						/>
						<Field
							label="BACHELOR OF COMMERCE (B.COM)"
							value="Mahatma Gandhi College, Kerala University · 2012–2015"
						/>
						<Field
							label="DETAILS"
							value="Focused on auditing, management accounting, costing, economics, and business law."
						/>
						<Field label="LANGUAGES" value="English · Italian · Hindi · Malayalam" />
						<Field
							label="PROFILE"
							value="Professional working communication across multicultural business and technology teams."
						/>
					</div>
				</SapDocumentWindow>

				<SapDocumentWindow
					title="Contact · Human Resources"
					code="BP-CONTACT"
					className="sap-contact-window"
				>
					<div className="sap-contact-grid">
						<div>
							<span className="sap-form-caption">Open channel</span>
							<h2>
								Let&apos;s build
								<br />
								<em>better workflows.</em>
							</h2>
							<p className="sap-window-copy">
								Reach out to discuss ERP, integration, business analysis, automation,
								or process improvement work.
							</p>
							<div className="sap-contact-list">
								<a href="mailto:namadmohammed0@gmail.com">
									<Mail size={15} /> namadmohammed0@gmail.com{" "}
									<ArrowUpRight size={13} />
								</a>
								<a href="tel:+916238414128">
									<Phone size={15} /> +91 62384 14128{" "}
									<ArrowUpRight size={13} />
								</a>
								<span>
									<MapPin size={15} /> Vembayam, Trivandrum, Kerala
								</span>
							</div>
						</div>
						<div className="sap-comms-form">
							<a
								className="sap-primary-button"
								href="mailto:namadmohammed0@gmail.com?subject=Portfolio%20Inquiry"
							>
								Start a conversation <ArrowUpRight size={14} />
							</a>
						</div>
					</div>
				</SapDocumentWindow>
			</main>
		</div>
	);
}