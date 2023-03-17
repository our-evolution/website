import ProfessionalModel from "../../libs/models/Professional";
// Add all professionals here
import { SusanneFuller } from './susanne-fuller'
import { IsabelleDelannoy } from './isabelle-delannoy'
import { ValeriaVilla } from './valeria-villa'

const professionals = new Map<string, ProfessionalModel>([
        [SusanneFuller.id,  SusanneFuller],
        [IsabelleDelannoy.id, IsabelleDelannoy],
        [ValeriaVilla.id, ValeriaVilla],
    ])

export default professionals
