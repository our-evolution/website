import ProfessionalModel from "../../libs/models/Professional";
// Add all professionals here
import { SusanneFuller } from './susanne-fuller'

const professionals = new Map<string, ProfessionalModel>([
        [SusanneFuller.id,  SusanneFuller],
    [SusanneFuller.id + "1",  SusanneFuller],
    [SusanneFuller.id + "2",  SusanneFuller],
    ])

export default professionals