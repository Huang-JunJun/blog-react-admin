import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function Aside(props: any) {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			sx={{
				width: '100%',
				maxWidth: 360,
				bgcolor: '#1976d2',
				marginLeft: '20px',
				color: '#ffffff',
			}}
			component='nav'
			aria-labelledby='nested-list-subheader'
		>
			<ListItemButton>
				<ListItemIcon>
					<SendIcon sx={{ color: '#ffffff' }} />
				</ListItemIcon>
				<ListItemText primary='Sent mail' />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<DraftsIcon sx={{ color: '#ffffff' }} />
				</ListItemIcon>
				<ListItemText primary='Drafts' />
			</ListItemButton>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<InboxIcon sx={{ color: '#ffffff' }} />
				</ListItemIcon>
				<ListItemText primary='Inbox' />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout='auto' unmountOnExit>
				<List component='div' disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<StarBorder sx={{ color: '#ffffff' }} />
						</ListItemIcon>
						<ListItemText primary='Starred' />
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
}
