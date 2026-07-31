import type { StorybookConfig } from '@storybook/react-vite';
import { aliases } from '../configs/aliases.js';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../apps/web/src/**/*.stories.@(ts|tsx)', '../packages/ui/src/**/*.stories.@(ts|tsx)', '../packages/ui/src/**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-docs'],
  viteFinal: async (config) => ({
    ...config,
    plugins: [...(config.plugins ?? [])],
    resolve: {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias ?? {}),
        ...aliases
      }
    }
  })
};

export default config;