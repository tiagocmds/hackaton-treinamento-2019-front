import angular from 'angular';

class DonoService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:8080/Projeto3/api/porta";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/dono";
    }
    
    getDonos() {
        return this.$http.get(this.path);
    }
}

export default angular.module('services.dono-service', [])
.service('donoService', DonoService)
.name;