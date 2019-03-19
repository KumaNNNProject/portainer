export function prepareCapabilities(config) {
  console.log('prepare capabilities');
  var allowed = this.formValues.capabilities.filter(function(item) {return item.allowed === true;});
  var notAllowed = this.formValues.capabilities.filter(function(item) {return item.allowed === false;});

  var getCapName = function(item) {return item.capability;};
  config.HostConfig.CapAdd = allowed.map(getCapName);
  config.HostConfig.CapDrop = notAllowed.map(getCapName);
}

export  function addVolume() {
  this.formValues.Volumes.push({ name: '', containerPath: '', readOnly: false, type: 'volume' });
}