import { FC } from 'react';
import Link, { LinkProps } from 'next/link';

export const UnderlinedLink: FC<LinkProps> = (linkProps) => {
	return (
		<span className="p-0 text-2 whitespace-nowrap cursor-pointer hover:underline mb-4 last:mb-0">
			<Link { ...linkProps } />
		</span>
	);
};
