import '@config/i18n';
import { Providers } from '@context';
import { createRoot } from 'react-dom/client';
import './index.scss';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(<Providers />);
