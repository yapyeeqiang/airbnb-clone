const exploreData = require('./exploreData.json');

export default function handler(req, res) {
	res.status(200).json(exploreData);
}
