import Plan from "../models/planModel.js";

const getPlanes = async (request, response) => {
    try {
        const planes = await Plan.find(); 
        response.status(200).json({ msg: 'ok', data: planes});
    } catch (error) {
        response.status(500).json({msg: 'Error del servidor', data: []});
    }
}

const getPlanById = async (request, response) => {
    try {
        const { id } = request.params;
        const plan = await Plan.findById(id);
        if (plan) {
            response.status(200).json({ msg: 'ok', data: plan});
        } else {
            response.status(404).json({msg: 'No se encontro el plan solicitado', data: []});
        }
    } catch (error) {
        console.log({error});
        response.status(500).json({error: 'Error del servidor', data: []});
    }
}

const addPlan = async (request, response) => {
    try {
        const plan = request.body;

        const newPlan = new plan(plan);
        newPlan.save();

        const id = newPlan._id;

        response.status(202).json({msg: `Plan guardado id:${id}` })
    } catch (error) {
        console.log({error});
        response.status(500).json({error: 'Error del servidor'});
    }
}

const deletePlanById = async (request, response) => {
    try {
        const { id } = request.params;
        const status = await planesModel.deletePlanById(id);
        if (status) {
            response.status(200).json({ msg: 'Plan eliminado exitosamente', data:[]});
        } else {
            response.status(404).json({msg: 'No se encontro el plan solicitado', data: []});
        }
    } catch (error) {
        console.log({error});
        response.status(500).json({error: 'Error del servidor', data: []});
    }
}

const updatePlanById = async (request, response) => {
    try {
        const { id } = request.params;
        const plan = request.body;
        const status = await planesModel.updatePlanById(id, plan);
        if (status) {
            response.status(200).json({ msg: 'Datos del plan actualizado', data: plan});
        } else {
            response.status(404).json({msg: 'No se encontro el plan solicitado', data: []});
        }
    } catch (error) {
        console.log({error});
        response.status(500).json({error: 'Error del servidor', data: []});
    }
}

export { getPlanes,  getPlanById, addPlan, deletePlanById, updatePlanById};