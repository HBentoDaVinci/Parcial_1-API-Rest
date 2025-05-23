import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planSchema = new Schema({
    nombre: {type: String, require: true},
    rangoEtario: {
        min: {type: Number, min: 0 },
        max: {type: Number, min: 0 }
    },
    cobertura: [String],
    grupoFamiliar: [String],
    prepaga: {type: String, require: true},
    tarifa: Number
});

const Plan = mongoose.model('plan', planSchema);

export default Plan