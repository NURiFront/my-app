type User = {
	_id?: number;
	email: string;
	password: string;
	name: string;
	photo: string;
	columns: Columns[];
};

type Columns = {
	title: string;
	tasks: Tasks[];
};

type Tasks = {
	_id?: number;
	task: string;
	comments: Comments[];
};

type Comments = {
	_id?: number;
	text: string;
};
