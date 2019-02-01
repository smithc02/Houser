module.exports = {
	getHouse: (req, res, next) => {
		const dbInstance = req.app.get('db');

		dbInstance
			.get_inventory()
			.then(response => res.status(200).send(response))
			.catch(err => {
				res
					.status(500)
					.send({ error: 'Error with get_inventory server' });
				console.log(err);
			});
	},

	create: (req, res, next) => {
		const dbInstance = req.app.get('db');
		const { name, address, city, state, zipcode } = req.body;

		dbInstance
			.create_house([name, address, city, state, zipcode])
			.then(() => res.sendStatus(200))
			.catch(err => {
				res
					.status(500)
					.send({ error: 'Error with create_house server' });
				console.log(err);
			});
	},

	delete: (req, res, next) => {
		const dbInstance = req.app.get('db');
		const { params } = req;

		dbInstance
			.delete_product(params.id)
			.then(product => res.status(200).send(product))
			.catch(err => {
				res.status(500).send({ error: 'Error with delete server' });
				console.log(err);
			});
	},
	update: (req, res, next) => {
		const dbInstance = req.app.get('db');
		const { id } = req.params;
		const { name, address, city, state, zipcode } = req.body;

		dbInstance
			.update_house([+id, name, address, city, state, zipcode])
			.then(response => res.status(200).send(response))
			.catch(err => {
				res.status(500).send({ error: 'Error with update' });
				console.log(err);
			});
	}
};
