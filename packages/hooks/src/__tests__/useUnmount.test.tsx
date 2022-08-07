import { render } from '@testing-library/react';

import { useUnmount } from '../useUnmount';

describe(`Test react hook \`${useUnmount.name}\``, () => {
    it('fires a callback', () => {
        const onUnmount = jest.fn();

        function TestComponent() {
            useUnmount(() => onUnmount());
            return <div />;
        }

        expect(onUnmount).toHaveBeenCalledTimes(0);
        const { unmount } = render(<TestComponent />);
        expect(onUnmount).toHaveBeenCalledTimes(0);
        unmount();
        expect(onUnmount).toHaveBeenCalledTimes(1);
    });
});
