import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <>
            <h2>Welcome to Beverage Express!</h2>
            <p>We are proud to be Carlisle's family-run, locally-owned beer distributor. We boast the best slection of domestic, craft, and import beer in the area at some of the best prices.</p>
            <div className="email-listserv">
                <h3>Sign Up for Our Newsletter</h3>
                <p>We are very active on social media, but if being social isn't your thing, sign up to join our email listserv. 
                    We will be sending out our ads, publicity, product features, and information about special events. 
                    You will receive about one to two emails a month (so it won't take up too much space in your inbox). 
                </p>
            </div>
        </>
    );
};

export default Home;