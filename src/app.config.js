routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
      
      let donoState = {
        name: 'dono',
        url: '/dono',
        templateUrl: './modulos/dono/dono.view.html',
        controller: 'DonoController',
        controllerAs: 'vm'
      }
      let portaState = {
        name: 'porta',
        url: '/porta',
        templateUrl: './modulos/porta/porta.view.html',
        controller: 'PortaController',
        controllerAs: 'vm'
      }
      let novaPortaState = {
        name: 'novaPorta',
        url: '/novaporta',
        templateUrl: './modulos/porta/novaPorta.view.html',
        controller: 'PortaController',
        controllerAs: 'vm'
      }
    
    
      $stateProvider.state(donoState);
      $stateProvider.state(portaState);
      $stateProvider.state(novaPortaState);
     
      $urlRouterProvider.otherwise('/home')  
}