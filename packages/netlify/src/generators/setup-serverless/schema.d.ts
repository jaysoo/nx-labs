export interface SetupServerlessFunctionOptions {
  project?: string;
  buildTarget?: string;
  lintTarget?: string;
  deployTarget?: string;
  devTarget?: string;
  skipFormat?: boolean;
  skipPackageJson?: boolean;
  site?: string;
}
