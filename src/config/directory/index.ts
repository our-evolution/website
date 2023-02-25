import ProfessionalModel from "../../libs/models/Professional";
// Add all professionals here
import { SusanneFuller } from './susanne-fuller'

const professionals = new Map<string, ProfessionalModel>([
        [SusanneFuller.id,  SusanneFuller],
    ])

export default professionals