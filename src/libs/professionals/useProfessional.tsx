import ProfessionalModel from '../models/Professional'
import professionals from '../../config/directory'
const useProfessional = (professionalId: string|undefined):ProfessionalModel|undefined => {
    if (professionalId === undefined) {
        return undefined
    }
    return professionals.get(professionalId)
}

export default useProfessional
