import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import { Component, ReactNode } from "react";
import {Box,} from "./FooterStyles";


/**
 * Egy teljesen alap lábléc lett elkészítve az oldalnak
 */
export default class Footer extends Component{
 render(): ReactNode {
    
    return <Box>
   
   <MDBFooter className='text-center text-lg-left'>
    <MDBContainer>
        <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                <h4 className="text-uppercase">Sky Fitness Vizsgaremek</h4>

                <p>A Sky Fitness csapatát Varga Szabolcs, 
                    Szabó bence és Radeczki Krisztián alkotja</p>
            </MDBCol>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                <h4 className="text-uppercase">Elérhetőségeink</h4>
                <p> Email: sky_fitness@gmail.com | Telefonszám: +36 1 645 8724</p>
            </MDBCol >
        </MDBRow>
    </MDBContainer>
    </MDBFooter>

  </Box>
    
 }
}   
    
