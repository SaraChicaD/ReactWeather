var React = require('react');

var Message = ({temp, location}) => {
	
	return(
			<div>
				<p>
					It's {temp} in {location}.
				</p>
			</div>
		);

};

module.exports = Message;

