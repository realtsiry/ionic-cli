import { getCommandMetadataList, createCommandEnvironment, runCommand } from '@ionic/cli-utils';
import { CordovaNamespace } from './commands';

export async function run(pargv: string[], env: { [k: string]: string }): Promise<void>  {
  const cordovaNamespace = new CordovaNamespace();
  const commandEnvironment = await createCommandEnvironment(pargv, env, cordovaNamespace);

  await runCommand(commandEnvironment);
}

export function getAllCommandMetadata(): any[] {
  const cordovaNamespace = new CordovaNamespace();
  return getCommandMetadataList(cordovaNamespace);
}