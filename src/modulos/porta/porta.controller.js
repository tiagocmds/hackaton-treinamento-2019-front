import { inherit } from "@uirouter/core";

export default class PortaController {
  
  constructor(portaService, $scope) {
    var vm = this;
    this.name = 'Porta';
    this.porta = {};
    
    init();
   
    function init(){
      portaService.getPortas().then(function abc(resp) {
        vm.portas = resp.data;
      });
    $scope.excluir = function(id){
       
        portaService.deletePorta(id).then(function a(data){
          location.reload();
        });
      }
    $scope.salvar =  function(porta){
        portaService.salvar(porta).then(function a(data){
          location.reload();
        });
        
      }
    $scope.salvarChave = function(porta, chave){
      var c1 = {
        codigo: chave.codigo,
        portaid: porta.id
      }
     portaService.salvarChave(c1).then(function a(data){
      location.reload();
      })
    }
    
    }
    $scope.editar =  function(edicao, porta){
      porta.cor = edicao.cor;
      portaService.editar(porta).then(function a(data){
        location.reload();
      });
      
    }
  }
}
PortaController.$inject = ['portaService', '$scope'];