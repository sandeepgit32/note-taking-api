exports.successResponse200 = (res, msg) => {
	var data = {
		status: 1,
		message: msg
	};
	return res.status(200).json(data);
};

exports.createdResponse201 = (res, msg) => {
	var data = {
		status: 1,
		message: msg
	};
	return res.status(201).json(data);
};

exports.ErrorResponse500 = (res, msg) => {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(500).json(data);
};

exports.notFoundResponse404 = (res, msg) => {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.validationError400 = (res, msg) => {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(400).json(data);
};

exports.unauthorizedResponse401 = (res, msg) => {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(401).json(data);
};