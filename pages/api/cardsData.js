const cardsData = require('./cardsData.json');

export default function handler(req, res) {
	res.status(200).json(cardsData);
}
