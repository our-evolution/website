import ProfessionalModel from "../../libs/models/Professional";
// Add all professionals here
import { SusanneFuller } from './susanne-fuller'
import { IsabelleDelannoy } from './isabelle-delannoy'
import { ValeriaVilla } from './valeria-villa'
import { HenriettaWhitfield } from './henrietta-whitfield'
import { LucyWalthoe } from './lucy-walthoe'
import { LynneBall } from './lynne-ball'
import { MihaelaHartescu} from './mihaela-hartescu'
import { SarahCrowley } from './sarah-crowley'

const professionals = new Map<string, ProfessionalModel>([
        [SusanneFuller.id,  SusanneFuller],
        [IsabelleDelannoy.id, IsabelleDelannoy],
        [ValeriaVilla.id, ValeriaVilla],
        [HenriettaWhitfield.id, HenriettaWhitfield],
        [LucyWalthoe.id, LucyWalthoe],
        [LynneBall.id, LynneBall],
        [MihaelaHartescu.id, MihaelaHartescu],
        [SarahCrowley.id, SarahCrowley],
    ])

export default professionals
