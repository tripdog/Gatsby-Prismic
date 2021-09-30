import * as gatsby from 'gatsby';
import { Dependencies, PluginOptions } from './types';
/**
 * Build the dependencies used by functions throughout the plugin.
 *
 * This collection of dependencies is shared through the use of the
 * `fp-ts/Reader` monad.
 *
 * @see https://gcanti.github.io/fp-ts/modules/Reader.ts.html
 *
 * @param gatsbyContext Arguments provided to Gatsby's Node APIs.
 * @param pluginOptions The plugin instance's options.
 *
 * @returns Dependencies used throughout the plugin.
 */
export declare const buildDependencies: (gatsbyContext: gatsby.NodePluginArgs, pluginOptions: PluginOptions) => Dependencies;
