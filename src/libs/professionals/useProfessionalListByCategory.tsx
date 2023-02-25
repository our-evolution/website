import ProfessionalModel from "../models/Professional";
import useProfessionalList from "./useProfessionalList";

const useProfessionalListByCategory = (categoryId: string):ProfessionalModel[] => {
    return useProfessionalList().filter((professional) => {
            return professional.categoryIds.includes(categoryId)
        }
    )
}
export default useProfessionalListByCategory