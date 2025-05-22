import fs from 'fs/promises';
const path = './planes.json';

class PlanesManager {

    planes = [];

    constructor(planes = []){
        this.planes = planes
    }

    // Metodo para crear un id random
    randomId(){
        return crypto.randomUUID();
    }

    async getPlanes(){
        try {
            const data = await fs.readFile(path, 'utf-8');
            this.planes = JSON.parse(data);
            return this.planes
        } catch(error) {
            console.log('No pudimos leer el archivo')
        }
    };

    async getPlanById(id){
        await this.getPlanes();
        const planById = this.planes.find(plan => plan.id === id);
        return planById ? planById : undefined;
    }

    async addPlan(plan) {
        try {
            await this.getPlanes();
            plan.id = this.randomId();
            this.planes.push(plan);
            const data = JSON.stringify(this.planes, null, 2);
            await fs.writeFile(path, data);
            return plan.id;
        } catch(error) {
            console.log('No pudimos guardar el archivo')
        }
    };

    async deletePlanById(id){
        await this.getPlanes();
        const index = this.planes.findIndex(p => p.id == id);
        if (index != -1){
            this.planes.splice(index, 1);
            const data = JSON.stringify(this.planes, null, 2);
            await fs.writeFile(path, data);
            return true
        } else {
            return false
        }
    }

    async updatePlanById(id, plan){
        await this.getPlanes();
        const index = this.planes.findIndex(p => p.id == id);
        if (index != -1){
            this.planes[index].nombre = plan.nombre;
            this.planes[index].rangoEtario = plan.rangoEtario;
            this.planes[index].cobertura = plan.cobertura;
            this.planes[index].ecivil = plan.ecivil;
            this.planes[index].prepaga = plan.prepaga;
            const data = JSON.stringify(this.planes, null, 2);
            await fs.writeFile(path, data);
            return true
        } else {
            return false
        }

    }

}
export default PlanesManager;