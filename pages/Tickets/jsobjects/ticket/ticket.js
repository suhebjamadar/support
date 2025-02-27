export default {
	async statusTextColor (status) {
		if (status === 'Open') {
			return '#25c45e'
		} else if (status === 'In Progress') {
			return '#edb20c';
		} else if (status === 'Escalated') {
			return '#ef4444';
		} else if (status === 'Closed') {
			return '#fa741f';
		};
	},

	getTicketsCount() {
		return GetTickets.data.length;
	},
	
	convertUnixToDateTime(unixTimestamp) {
    let date = new Date(unixTimestamp);
    return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: false  });
	}
}