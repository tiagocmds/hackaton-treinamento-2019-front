import angular from 'angular';

class PortaService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:8080/Projeto3/api/porta";
        const apiBase = "http://localhost:8080/Projeto3/api";
        this.path =  apiBase + "/porta";
    }
    
    getPortas() {
        return this.$http.get(this.path);
    }
    deletePorta(id){
        return this.$http.delete(this.path+"/excluir/"+id)
    }
    salvar(porta){
        return this.$http.post(this.path,porta)
    }
    salvarChave(chave){
        return this.$http.post(this.path+"/addchave",chave)
    }
    editar(porta){
        return this.$http.put(this.path,porta)
    }
	
}

export default angular.module('services.porta-service', [])
.service('portaService', PortaService)
.name;