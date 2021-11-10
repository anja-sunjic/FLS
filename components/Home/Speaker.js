import LinkedIn from '../partials/LinkedIn';
import Image from 'next/image';
import Link from 'next/link';
export default function Speaker(props) {
	return (
		<div className='column is-6'>
			<div className='inner'>
				<div className='columns is-mobile is-vcentered'>
					<div className='column is-narrow'>
						<Link href={`/speakers/${props.slug}`}>
							<div href='' className='speaker-img'>
								<Image
									src={props.img}
									alt={props.name}
									height={230}
									width={200}
									className='grayscale'
									priority={true}
								/>
							</div>
						</Link>
					</div>
					<div className='column is-8'>
						<div className='speaker'>
							<p className='name'>{props.name}</p>
							<p className='title'>{props.title}</p>
							<LinkedIn url={props.li} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
