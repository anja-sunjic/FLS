import { wed, thu, fri } from '../../data/program';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { speakers } from '../../data/speakers';
import { useState } from 'react';

const createProgram = (day) => {
	return day.map((item, index) => {
		return (
			<div
				className={`program-item ${item.type.includes('Break') ? 'break' : ''}`}
				key={`${item.time} ${item.type} ${index}`}
			>
				<div className='left'>
					<p className='time'>{item.time}</p>
					<p className='type'>{item.type}</p>
				</div>
				<div className='right'>
					{item.events.map((ev) => {
						return (
							<div className='item-event' key={ev.id} id={ev.id}>
								{ev.link == null ? (
									<p className='title'>{ev.title}</p>
								) : (<a href={ev.link} target="_blank" rel="noreferrer" className='title-link'>{ev.title}</a>)}
								{ev.speakers &&
									ev.speakerIds.map((x) => {
										return (
											<a
												href={`/speakers/${
													speakers.find((speaker) => speaker.id == x).slug
												}`}
												key={x.id}
											>
												<p className='speaker'>
													{speakers.find((speaker) => speaker.id == x).name}
												</p>
											</a>
										);
									})}
								{ev.desc && <p className='desc'>{ev.desc}</p>}
								<div className='tags'>
									{ev.tags &&
										ev.tags.map((tag) => {
											return (
												<p className='tag' key={tag}>
													{tag}
												</p>
											);
										})}
								</div>
							</div>
						);
					})}
					{item.type === 'Workshop' || item.type === 'Company Visit' || item.type === 'Tech Tutorial/Company Visit' ? (
						<p className='note-text'>
							NOTE: Participants will be distributed for parallel sessions based
							on personal preference and session availability.
						</p>
					) : null}
				</div>
			</div>
		);
	});
};

export default function ProgramTabs() {
	const [tabIndex, setTabIndex] = useState(0);
	console.log(tabIndex);
	return (
		<>
			<section className='section program-tabs'>
				<div className='container'>
					<Tabs
						selectedIndex={tabIndex}
						onSelect={(index) => setTabIndex(index)}
					>
						<TabList>
							<Tab>Day 1</Tab>
							<Tab>Day 2</Tab>
							<Tab>Day 3</Tab>
						</TabList>

						<TabPanel>
							<div className='head'>
								<h2>education track - WEDNESDAY, DECEMBER 15</h2>
								<img
									src='/program-lines.png'
									alt='Futures Leaders Summit'
									className='is-hidden-touch'
								/>
							</div>
							{createProgram(wed)}
						</TabPanel>
						<TabPanel>
							<div className='head'>
								<h2>technology track - thursday, DECEMBER 16</h2>
								<img
									src='/program-lines.png'
									alt='Futures Leaders Summit'
									className='is-hidden-touch'
								/>
							</div>
							{createProgram(thu)}
						</TabPanel>
						<TabPanel>
							<div className='head'>
								<h2>leadership track - friday, DECEMBER 17</h2>
								<img
									src='/program-lines.png'
									alt='Futures Leaders Summit'
									className='is-hidden-touch'
								/>
							</div>
							{createProgram(fri)}
						</TabPanel>
					</Tabs>
				</div>
			</section>
		</>
	);
}
