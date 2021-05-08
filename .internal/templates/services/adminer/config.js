const adminer = () => {
  const retr = {};

  const serviceName = 'adminer';

  retr.getConfigOptions = () => {
    return {
      serviceName, // Required
      labeledPorts: {
        "9080:8080": 'http'
      },
      volumes: false,
      networks: false,
      logging: true
    }
  };

  retr.getHelp = () => {
    return {
      serviceName, // Required
      website: 'https://www.adminer.org/', // Website of service
      serviceDocs: '', // Official link to docs of service
      docker: 'https://hub.docker.com/_/adminer/', // Docker of service
      source: 'https://github.com/vrana/adminer/', // Sourcecode of service
      community: '', // Community link
      communityChat: '', // Discord, gitter etc
      other: '', // Other links
      rawMarkdownRemote: '', // Usually links to github raw help pages.
      rawMarkdownLocal: '', // Relative path to docs locally
      onlineRendered: 'https://sensorsiot.github.io/IOTstack/Containers/Adminer/' // Usually links to the github page for this service.
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
      displayName: 'Adminer',
      serviceTypeTags: ['wui', 'database manager'],
      iconUri: '/logos/adminer.png'
    };
  };

  return retr;
};

module.exports = adminer;
