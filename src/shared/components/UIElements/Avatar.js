import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
	return (
		<div className={`avatar ${props.className}`} style={props.style}>
			<img
				src={require("/home/solomon/Documents/Mern/mernstackguide/src/pics/Solomon.jpeg")}
				alt={props.alt}
				style={{ width: props.width, height: props.width }}
			/>
		</div>
	);
};

export default Avatar;
