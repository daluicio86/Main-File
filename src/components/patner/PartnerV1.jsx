import Image from 'next/image';
import React from 'react';
import PriceV1Data from '../../../public/assets/jsonData/price/PriceV1Data.json'

import sectionShape from '@/public/assets/images/about/section-shape.png'
import SinglePartnerV1 from './SinglePartnerV1';

const PartnerV1 = () => {
	return (
		<>
			<div className="pricing-area animate__animated animate__slideInUp">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center">
								<div className="section-shape">
									<Image src={sectionShape} alt="image" />
								</div>
								<div className="section-sub-title">
									<h4>Conoce a Nuestros Aliados</h4>
								</div>
								<div className="section-main-title pricing">
									<h4>Contamos con aliados estratégicos para el sector de capacitación y formación.</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						{PriceV1Data.priceData.map(plan =>
							<div className="col-lg-4 col-md-6" key={plan.id}>
								<SinglePartnerV1 plan={plan} />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default PartnerV1;