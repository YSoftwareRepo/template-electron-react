import { AppDetails } from '@tecra/electron-common';
import { expectElementSnapshot } from '@tecra/utils-test';
import { render } from '@testing-library/react';

import { Introduction } from './Introduction';

describe('Test component `Introduction`', () => {
    it('renders', () => {
        const appDetails: AppDetails = {
            name: 'tecra',
            version: 'unknown',
            module: {
                chrome: 'unknown',
                electron: 'unknown',
                node: 'unknown',
                v8: 'unknown',
            },
        };

        const reactElement = <Introduction appDetails={appDetails} />;

        expectElementSnapshot(reactElement);

        const { getByText } = render(reactElement);
        const linkElement = getByText(/Learn template-electron-cra/i);
        expect(linkElement).toBeInTheDocument();
    });
});
