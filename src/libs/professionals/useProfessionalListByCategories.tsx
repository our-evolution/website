import ProfessionalModel from "../models/Professional";
import useProfessionalList from "./useProfessionalList";


const useProfessionalListByCategories = (categoryIds: string[]):ProfessionalModel[] => {
    return useProfessionalList().filter((professional) => {
        return professional.categoryIds.find((categoryId) => {return categoryIds.includes(categoryId)})
    })
}
export default useProfessionalListByCategories