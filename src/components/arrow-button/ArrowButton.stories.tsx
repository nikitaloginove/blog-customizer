import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
	args: {
		onClick: () => alert('onClick'),
		isOpen: false,
	},
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: (args) => {
		return (
			<>
				<ArrowButton {...args} />
			</>
		);
	},
};
