import { Button } from '@/components/ui/Button';
import { ButtonGroup } from './styles';

interface ServerActionsProps {
	handlePingServer: () => void;
}

export const ServerActions = ({ handlePingServer }: ServerActionsProps) => {
	return (
		<ButtonGroup>
			<Button variant="primary" onClick={handlePingServer}>
				Ping Server
			</Button>
		</ButtonGroup>
	);
};
