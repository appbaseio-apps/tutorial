import React from 'react';
import Footer from '../components/Footer';
import { moviesJson } from '../utils/sampleData/moviesData';
import { geoJson } from '../utils/sampleData/geoData';
import { ecommJson } from '../utils/sampleData/ecommData';
import importSvg from '../images/Import.svg';

function SampleDataset({nextScreen, selectedApp}) {
    function jsonBlock() {
        if(selectedApp.id === 'movies-demo-app') {
            return moviesJson
        }
        if (selectedApp.id === 'ecomm-demo-app') {
			return ecommJson;
		}
        return geoJson;
    }

    function renderJSONBlock() {
		return (
			<div>
				<p>Showing sample JSON of the selected app:</p>
				<div
					style={{ width: '650px' }}
					className="code-block"
					dangerouslySetInnerHTML={{ __html: jsonBlock() }}
				/>
			</div>
		);
	}

    return (
        <div className="wrapper">
            <div>
                <img src={importSvg} alt="importing data" />
            </div>
            <div className="content">
                <header className="vcenter">
                    <h2>Sample Data</h2>                
                    <p>{`We have ${selectedApp.count} items obtained from TMDB in our ${selectedApp.name} dataset.`}</p>             
                </header>
                <div className="col-wrapper">{renderJSONBlock()}</div>
            </div>
            <Footer nextScreen={nextScreen} />
        </div>
    );
}

export default SampleDataset;