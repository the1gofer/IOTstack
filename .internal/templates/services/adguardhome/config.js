const pihole = () => {
  const retr = {};

  const serviceName = 'pihole';

  retr.getConfigOptions = () => {
    return {
      serviceName, // Required
      labeledPorts: {
        "8089:8089": 'http',
        "3001:3001": 'http-setup'
      },
      volumes: true,
      networks: true,
      logging: true
    }
  };

  retr.getHelp = () => {
    return {
      serviceName, // Required
      website: '', // Website of service
      rawMarkdownRemote: '', // Usually links to github raw help pages.
      rawMarkdownLocal: '', // Relative path to docs locally
      onlineRendered: '' // Usually links to the github page for this service.
    };
  };

  retr.getCommands = () => {
    return {
      commands: {} // Key/value pair of helper commands user can run locally
    };
  };

  retr.getMeta = () => {
    return {
      serviceName, // Required
      displayName: 'AdGuard (Untested)',
      serviceTypeTags: ['wui', 'dns', 'dashboard'],
      iconUri: '/logos/adguardhome.png'
    };
  };

  return retr;
};

module.exports = pihole;
