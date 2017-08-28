Package.describe({
  name: 'lindoelio:accounts-office365',
  version: '0.1.0',
  summary: 'Login service for Microsoft Office 365 accounts',
  git: 'https://github.com/lindoelio/meteor-accounts-office365',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);

  api.use('lindoelio:office365-oauth');
  api.imply('lindoelio:office365-oauth');

  api.use(
    ['accounts-ui'],
    ['client', 'server'],
    { weak: true }
  );
  api.addFiles('office365.js');
});
