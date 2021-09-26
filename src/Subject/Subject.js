import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacbook, faFax, faBookReader, faReceipt } from '@fortawesome/free-solid-svg-icons';
import './Subject.css'


const Subject = (props) => {
    // console.log(props);
    const { departmentname, img, facultymembers, cost, year, scholarship } = props.subject;
    const icon = <FontAwesomeIcon icon={faFax} />
    const icon2 = <FontAwesomeIcon icon={faBookReader} />
    return (
        <div className="details-container">
            <div className="card">
                <div className="img-color" >
                    <img src={img} alt="" />
                </div>
                <div className="card-body">
                    <h3>Department Name : {departmentname}</h3>
                    <h4>Subject : {props.subject.subject}</h4>
                    <h5>Faculty Members : {facultymembers}</h5>
                    <p>Year: {year}</p>
                    <p>Cost : ${cost}</p>
                    <p>Scholarship : {scholarship}</p>
                    <button
                        onClick={() => props.handleAddToCart(props.subject)}
                        className="purchase-btn">Add Subject</button><br />
                    {icon} {icon2}
                </div>
            </div>
        </div>
    );
};

export default Subject;