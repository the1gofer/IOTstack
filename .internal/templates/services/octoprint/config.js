const deconz = () => {
  const retr = {};

  const serviceName = 'deconz';

  retr.getConfigOptions = () => {
    return {
      serviceName, // Required
      labeledPorts: {
        "9980:80": 'http',
        "9981:8080": 'other'
      },
      modifyableEnvironment: [
        {
          key: 'TZ',
          value: 'Etc/UTC'
        },
        {
          key: 'ENABLE_MJPG_STREAMER',
          value: ''
        },
        {
          key: 'MJPG_STREAMER_INPUT',
          value: ''
        },
        {
          key: 'CAMERA_DEV',
          value: ''
        }
      ],
      devices: true,
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
      displayName: 'Octoprint (Untested)',
      serviceTypeTags: ['3d printer'],
      iconUri: '/logos/octoprint.png'
    };
  };

  return retr;
};

module.exports = deconz;
