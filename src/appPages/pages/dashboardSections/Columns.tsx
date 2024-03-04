'use client';
import { FC } from 'react';
import scss from './Columns.module.scss';
// import { IconSearch } from '@tabler/icons-react';
// import { Input, Space } from 'antd';
import { Button } from 'antd';
import { Input, Space } from 'antd';
// import { UserOutlined } from '@ant-design/icons';

// type Types = {
// 	_id?: number;
// 	title: string;
// 	items: {
// 		_id: number;
// 		title: string;
// 	}[];
// };
const Columns: FC = () => {
	// 	const [containers, setContainers] = useState([]);
	// 	const [activeId, setActiveId] = useState<number | null>(null);
	// 	const [currentContainerId, setCurrentContainerId] = useState<number>();
	// 	const [containerName, setContainerName] = useState('');
	// 	const [itemName, setItemName] = useState('');
	// 	const [showAddContainerModal, setShowAddContainerModal] = useState(false);
	// 	const [showAddItemModal, setShowAddItemModal] = useState(false);

	return (
		<>
			<section className={scss.Columns}>
				<div className="container">
					<div className={scss.content}>
						<h1>Columns</h1>
						{/* <Input size='small' placeholder="large size" prefix={<UserOutlined />} /> */}
						<Space.Compact size="small">
							<Input placeholder="large size" />
						</Space.Compact>
						{/* <input type=" new column name" /> */}
						<Button>Add Columns</Button>
						{/* <button> Submit</button> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Columns;
