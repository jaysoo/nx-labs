import { formatFiles, GeneratorCallback, Tree } from '@nrwl/devkit';

import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial';
import applicationGenerator from '../application/application.impl';
import setupGenerator from '../setup/setup.impl';
import { normalizeOptions } from './lib/normalize-options';
import { RemixGeneratorSchema } from './schema';

export default async function (tree: Tree, _options: RemixGeneratorSchema) {
  const options = normalizeOptions(tree, _options);
  const tasks: GeneratorCallback[] = [];

  const setupGenTask = await setupGenerator(tree);
  tasks.push(setupGenTask);

  const appGenTask = await applicationGenerator(tree, {
    name: options.appName,
    tags: options.tags,
    skipFormat: true,
  });
  tasks.push(appGenTask);

  await formatFiles(tree);

  return runTasksInSerial(...tasks);
}
