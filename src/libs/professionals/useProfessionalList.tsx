import ProfessionalModel from '../models/Professional'
import professionals from '../../config/directory'
const useProfessionalList = ():ProfessionalModel[] => {
    return Array.from(professionals.values())
}
export default useProfessionalList