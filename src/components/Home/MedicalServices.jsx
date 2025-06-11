
import '../../styles/Home/medicalServices.css'
import medical from '../../img/medical_services_g.jpg'
import { BsArrowReturnRight } from "react-icons/bs";

const services = [
    "Tipos de Cancer",
    "Informacion sobre el cancer",
    "Tratamientos",
    "Diagnosticos y pruebas",
    "Datos y Contacto",
    "Hacerca de Nosotros"
]

export const MedicalServices = () => {
    return (
        <div className='container_medical_services'>
            <div>
                <img 
                    src={medical} 
                    alt='medical'
                    className='full-height-image w-24 sm:w-32 md:w-40 lg:w-48'/>
            </div>
            <div className='conyainer_list'>
                <ul className='list_of_services'>
                    {services.map((service) => (
                        <div className='list_of_services_div'>
                            <p>{service}</p>
                            <BsArrowReturnRight />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}