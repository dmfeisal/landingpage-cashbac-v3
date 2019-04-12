import React from 'react'
import { isIOS } from 'react-device-detect';
import { isSafari } from 'react-device-detect';

const Download = () => {
	let linkValue = 'https://play.google.com/store/apps/details?id=com.cashbac';
	if (typeof window !== `undefined`) {
		if (isIOS) {
			linkValue = 'https://itunes.apple.com/us/app/cashbac/id1296118354';
			}
			if (isSafari) {
			linkValue = 'https://itunes.apple.com/us/app/cashbac/id1296118354';
		}
		window.location.href = linkValue;
	}
	return <div><p>Click this link to Download cashbac apps <a href={linkValue} title="Download Cashbac Apps">Download</a></p></div>
}
export default Download;