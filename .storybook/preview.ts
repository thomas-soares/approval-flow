import type { Preview } from '@storybook/react-vite';
import '../apps/web/src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true
    },
    a11y: {
      element: '#storybook-root'
    }
  }
};

export default preview;