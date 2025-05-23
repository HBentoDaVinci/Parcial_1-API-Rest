import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planSchema = new Schema({
    nombre: String,
    rangoEtario: {
        min: Number,
        max: Number
    },
    cobertura: [String],
    grupoFamiliar: [String],
    prepaga: String,
    tarifa: Number
});

const Plan = mongoose.model('plan', planSchema);

export default Plan