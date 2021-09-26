import { useEffect, useState } from 'react';
import Cart from '../../../Cart/Cart';
import Subject from '../../../Subject/Subject';
import './Body.css'

const Body = () => {

    const [subjects, setSubjects] = useState([]);
    const [cart, setCart] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
        fetch('./subjectlist.JSON')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    //add event handler 
    const handleAddToCart = (subject) => {
        // console.log("clicked");
        // console.log(subject.subject);
        const newCart = [...cart, subject];
        setCart(newCart);

        const newName = [...name, subject];
        setName(newName);
        console.log(name);
    }
    return (
        <div className="body">
            <div>
                <Cart cart={cart}
                    name={name}
                ></Cart>
            </div>
            <div className="subject-list">
                {
                    subjects.map(subject => <Subject
                        subject={subject}
                        handleAddToCart={handleAddToCart}
                    ></Subject>)
                }
            </div>
        </div>
    );
};

export default Body;