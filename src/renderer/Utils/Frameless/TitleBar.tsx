import { ReactElement, ReactNode, useCallback, useEffect, useRef } from 'react';

import { IClientAreaSize } from '#RUtils/Types';

import scss from './TitleBar.module.scss';

export interface ITitleBarProps {
    children?: ReactNode;
    onClientAreaSizeChange?: (clientAreaSize: IClientAreaSize) => void;
}

export function TitleBar(props: Readonly<ITitleBarProps>): ReactElement {
    const { children, onClientAreaSizeChange } = props;

    const ref = useRef<HTMLDivElement>(null);

    const _onClientAreaSizeChange = useCallback(
        () => onClientAreaSizeChange?.({ height: ref.current!.clientHeight, width: ref.current!.clientWidth }),
        [onClientAreaSizeChange],
    );

    useEffect(() => {
        _onClientAreaSizeChange();

        window.addEventListener('resize', _onClientAreaSizeChange);

        return () => {
            window.removeEventListener('resize', _onClientAreaSizeChange);
        };
    }, [_onClientAreaSizeChange]);

    return (
        <div className={scss.Root} ref={ref}>
            {children}
        </div>
    );
}
