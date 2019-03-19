import angular from 'angular';
import uirouter from 'angular-ui-router';

import PortaController from './porta.controller';
import portaService from '../../servicos/porta.service';

export default angular.module('myApp.porta', [uirouter, portaService])
  .controller('PortaController', PortaController)
  .name;

