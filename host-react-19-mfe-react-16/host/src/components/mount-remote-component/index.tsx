/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadRemote } from '@module-federation/enhanced/runtime';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export type TMountRemoteComponentProps = {
	id: string;
};

export const MountRemoteComponent: React.FC<TMountRemoteComponentProps> = ({ id }) => {
	const ref = useRef<HTMLDivElement>(null);

	const convertChildrenToElementRecursive = (children: any): any => {
		const resultChildren = [];
		if (Array.isArray(children)) {
			for (let i = 0; i < children.length; i++) {
				let nestedChildren;
				// the item props children is an ARRAY
				if (Array.isArray(children[i].props.children)) {
					nestedChildren = convertChildrenToElementRecursive(children[i].props.children);
					// the item props children is an OBJECT
				} else if (children[i].props.children.type) {
					nestedChildren = React.createElement(
						children[i].props.children.type,
						children[i].props.children.props
					);
				}
				// ELSE the item props children is a STRING
				const props = nestedChildren
					? { ...children[i].props, children: nestedChildren, key: i }
					: { ...children[i].props, key: i };
				resultChildren.push(React.createElement(children[i].type, props));
			}
		}
		return children ? resultChildren : children;
	};

	useEffect(() => {
		loadRemote(id).then(async (remoteComponent: any) => {
			const transitionalElement = await remoteComponent.default();
			const { type, props } = transitionalElement;
			// convert all nested Transitional Elements to React Elements
			const children = convertChildrenToElementRecursive(props.children);
			const nextProps = children ? { ...props, children } : { ...props };
			// render the component
			const reactComponent = React.createElement(type, nextProps);
			ReactDOM.render(reactComponent, ref.current?.parentElement);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return <div ref={ref} />;
};
